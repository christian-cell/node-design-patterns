/* 
* abstract es una forma de asegurarnos de que nadie pueda crear una instancia de esta
* y cualquier clase que implemente esta debe tener sus métodos
* establecemos un contrato en el que todos los dataSources deban cumplirlo
*/

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogDatasource{

    abstract saveLog( log: LogEntity ):Promise<void>;

    abstract getLogs( severityLevel: LogSeverityLevel ):Promise<LogEntity[]>;
}

