import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(

    new FileSystemDatasource(),
    //new postgressDatasource
    // new mongoLogDataSource
);

export class Server{

    public static start(){

        CronService.createJob(

            '*/5 * * * * *',
            () => {

                const url = 'https://google.com';

                const date = new Date();
                console.log('5 second', date);

                new CheckService(
                    
                    fileSystemLogRepository,
                    () => console.log('success'),
                    (error) => console.log(error)

                ).execute(`${url}`)
            }
        );
    }
}