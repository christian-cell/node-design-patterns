import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server{

    public static start(){

        CronService.createJob(

            '*/5 * * * * *',
            () => {

                const url = 'https://google.com';

                const date = new Date();
                console.log('5 second', date);

                new CheckService(

                    () => console.log('success'),
                    (error) => console.log(error)

                ).execute(`${url}`)
            }
        );
    }
}