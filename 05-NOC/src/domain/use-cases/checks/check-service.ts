import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface checkServiceUseCase{
    execute(url : string) :Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ((error : string) => void) | undefined;

export class CheckService implements checkServiceUseCase{

    constructor(

        private readonly logRepository:                            LogRepository,
        private readonly successCallBack:                          SuccessCallback,
        private readonly errorCallback:                            ErrorCallback

    ){}

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

            this.logRepository.saveLog(log);

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

            this.logRepository.saveLog( log );

            this.errorCallback && this.errorCallback(`the error catch was : ${error}`);

            return false;
        }
    }
}