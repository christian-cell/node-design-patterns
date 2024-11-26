import { LogDatesource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';

export class FileSystemDatasource implements LogDatesource{

    private readonly logPath =        'logs/';
    private readonly allLogsPath =    'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath =   'logs/logs-high.log';

    constructor(){

        /* 
        * ensure files already exists
        */

        this.createLogsFiles();
    }

    private createLogsFiles = () => {

        /* 
        * two ways , first to do not repeat yourself
        */

        [ this.allLogsPath, this.mediumLogsPath, this.logPath , this.highLogsPath ].forEach( path => {

            if(!fs.existsSync(path))fs.writeFileSync( path , '' );
        });

        /* if( !fs.existsSync( this.logPath ) ) fs.mkdirSync(this.logPath);

        if( !fs.existsSync( this.allLogsPath ) ) fs.mkdirSync(this.allLogsPath);
        
        if( !fs.existsSync( this.mediumLogsPath ) ) fs.mkdirSync(this.mediumLogsPath);

        if( !fs.existsSync( this.highLogsPath ) ) fs.mkdirSync(this.highLogsPath); */
    }

    async saveLog(newLog: LogEntity): Promise<void> {

        const logAsJson = `${JSON.stringify(newLog)}\n`;

        fs.appendFileSync( this.allLogsPath, `${JSON.stringify(newLog)}\n` );

        if( newLog.level === LogSeverityLevel.low ) return; //do not do nothing

        if( newLog.level === LogSeverityLevel.medium ) {

            fs.appendFileSync( this.mediumLogsPath, logAsJson );

        } else {

            fs.appendFileSync( this.highLogsPath, logAsJson );
        }
    }

    private getLogsFromFile = ( path: string ): LogEntity[] => {

        const content = fs.readFileSync( path , 'utf-8');  

        const logs = content.split('\n').map( LogEntity.fromJson );

        return logs;
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {

        switch ( severityLevel ) {
            
            case LogSeverityLevel.low:
            return this.getLogsFromFile( this.allLogsPath );

            case LogSeverityLevel.medium:
            return this.getLogsFromFile( this.mediumLogsPath );

            case LogSeverityLevel.high:
            return this.getLogsFromFile( this.highLogsPath );

            default:
                throw new Error (`${severityLevel} not implemented`);
        }
    }
}