import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const MongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);

const PostgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);

const emailService = new EmailService(  );

export class Server{

    public static async start(){

        console.log('Server running...');
        
        /* 
        * 👀 Envío de emails
        */

        new SendEmailLogs(

            emailService , fileSystemLogRepository

        ).execute(

            ['christian.garcia-martin@viseo.com', 'cristohp74@gmail.com'],
        )

        /* 
        * 👀 Envío de emails
        */

        /* emailService.sendEmail({

            to: 'christian.garcia-martin@viseo.com',
            subject: 'logs del sistema',
            htmlBody: `
               <h3> logs del sistema </h3>
               <p> Texto de relleno </p>
               <p> ver los adjuntos </p>
            `
        }) */

        const highLogs = await MongoLogRepository.getLogs(LogSeverityLevel.high);
        const lowLogs = await MongoLogRepository.getLogs(LogSeverityLevel.high);
        const mediumLogs = await MongoLogRepository.getLogs(LogSeverityLevel.high);

        // console.log('lowLogs : ' ,lowLogs);

        CronService.createJob(

            '*/5 * * * * *',
            () => {

                const url = 'https://goas.com';

                /* new CheckService(
                    
                    // LogRepository,
                    // fileSystemLogRepository,
                    PostgresLogRepository,
                    () => console.log('success'),
                    (error) => console.log(error)

                ).execute(`${url}`) */

                new CheckServiceMultiple(

                    [PostgresLogRepository , MongoLogRepository, fileSystemLogRepository],
                    () => console.log('success'),
                    (error) => console.log(error)

                ).execute(`${url}`)
            }
        );
    }
}