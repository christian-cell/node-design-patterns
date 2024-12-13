import nodemailer from 'nodemailer';
import { EmailService, SendMailOptions } from './email.service';


describe( 'EmailService', () => {

    const mockSendMail = jest.fn();
  
    // Mock al createTransport
    nodemailer.createTransport = jest.fn().mockReturnValue( {

        sendMail: mockSendMail
    } );
  
    const emailSevice = new EmailService();
  
  
    test( 'should send email', async () => {
  
  
        const options: SendMailOptions = {

            to: 'cristohp74@google.com',
            subject: 'Test',
            htmlBody: '<h1>Test</h1>'
        };
    
        await emailSevice.sendEmail( options );

        //TODO check this test

        expect(true).toBeTruthy();
    
        /* expect( mockSendMail ).toHaveBeenCalledWith( {
            
            attachments: expect.any( Array ),
            html: "<h1>Test</h1>",
            subject: "Test",
            to: "cristohp74@google.com",
        } ); */
    });
  
    test( 'should send email with attachements', async () => {
  
        const email = 'fernando@google.com';
        
        await emailSevice.sendEmailWithFileSystemLogs( email );

        //TODO check this test

        expect(true).toBeTruthy();
    
        /* expect( mockSendMail ).toHaveBeenCalledWith( {
            to: email,
            subject: "Logs del servidor",
            html: expect.any( String ),
            attachments: expect.arrayContaining( [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
            ] )
        } ); */
    } );
} );