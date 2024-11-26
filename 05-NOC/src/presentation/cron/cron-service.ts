import { CronJob } from "cron";

type CronType = string | Date;
type OnTick = () => void;

export class CronService{

    public static createJob( cronTime: CronType, onTick: OnTick ){

        const job = new CronJob(cronTime , onTick);

        job.start();

        return job;
    }
}