import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(

    new FileSystemDatasource(),
    //new postgressDatasource
    // new mongoLogDataSource
);

const emailService = new EmailService(  );

export class Server{

    public static start(){

        
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

        

        CronService.createJob(

            '*/5 * * * * *',
            () => {

                /* const url = 'https://google.com';

                const date = new Date();
                console.log('5 second', date);

                new CheckService(
                    
                    fileSystemLogRepository,
                    () => console.log('success'),
                    (error) => console.log(error)

                ).execute(`${url}`) */
            }
        );
    }
}