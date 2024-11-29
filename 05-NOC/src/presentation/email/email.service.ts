import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export interface SendMailOptions{

    to:                string | string[];
    subject:           string;
    htmlBody:          string;
    attachments?:      Attachment[];
}

interface Attachment{

    filename:          string;
    path:              string;
}

export class EmailService{

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        port: envs.PORT,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: envs.MAILER_EMAIL,
          pass: envs.MAILER_SECRET_KEY,
        },
    });

    constructor(){}

    async sendEmail( options : SendMailOptions ):Promise<boolean>{
        

        const { to , subject, htmlBody, attachments = [] } = options || {}

        try {

            /* const sentInformation = await this.transporter.sendMail({

                to: to,
                subject : subject,
                html: htmlBody,
                attachments: attachments
            }); */

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent',
                origin: 'email.service.ts',
                createdAt: new Date()
            })
            
            return true;

        } catch (error) {

            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'email.service.ts',
                createdAt: new Date()
            })
            
            return false;
        }
    }

    sendEmailWithFileSystemLogs( to:string | string [] ){

        const subject = 'Logs del server';
        const htmlBody = `
            <h3> logs del sistema </h3>
            <p> Texto de relleno </p>
            <p> ver los adjuntos </p>
        `;

        const attachments: Attachment [] = [

            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
        ]

        /* const sentInformation = this.transporter.sendMail({

            to: to,
            subject : subject,
            html: htmlBody,
            attachments: attachments
        }); */

        return true;
    }
}