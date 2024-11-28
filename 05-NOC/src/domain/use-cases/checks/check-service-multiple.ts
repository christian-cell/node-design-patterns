import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface checkServiceMultipleUseCase{
    execute(url : string) :Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ((error : string) => void) | undefined;

export class CheckServiceMultiple implements checkServiceMultipleUseCase{

    constructor(

        private readonly logRepository:                            LogRepository[],
        private readonly successCallBack:                          SuccessCallback,
        private readonly errorCallback:                            ErrorCallback

    ){}

    private callLogs( log: LogEntity ){

        this.logRepository.forEach( logRepository => {

            logRepository.saveLog(log);
        })
    }

    public async execute (url: string): Promise<boolean> {

        try {
            
            const req = await fetch( url );

            if( !req.ok ) throw new Error(`error on check service: ${url}`);

            const log = new LogEntity({
                message: `Service ${url} working` , 
                level:LogSeverityLevel.low,
                origin: 'check-service.ts',
                createdAt : new Date()
            });

            // this.logRepository.saveLog(log);
            this.callLogs(log)

            this.successCallBack && this.successCallBack();

            return true;

        } catch (error) {

            const errorMessage = `${url} is not ok , error : ${error}`;

            const log = new LogEntity({
                message: errorMessage , 
                level : LogSeverityLevel.high,
                origin: 'check-service.ts',
                createdAt : new Date()
            });

            // this.logRepository.saveLog( log );
            this.callLogs(log)

            this.errorCallback && this.errorCallback(`the error catch was : ${error}`);

            return false;
        }
    }
}