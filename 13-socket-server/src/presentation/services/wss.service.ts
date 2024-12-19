import { Server } from 'http';
import { WebSocket, WebSocketServer } from 'ws';

interface Options {

    server:Server,
    path?: string
}

export class WssService{

    /* 
    * como singleton porque solo necesitamos una instancia de este
    */

    private static _instance : WssService;

    private wss: WebSocketServer;

    private constructor( options: Options ){

        /* ws://www.host.com/path */
        const { server , path = '/ws' } = options || {};
    
        this.wss = new WebSocketServer({ server, path });

        this.start();
    }

    /* 
    * como la instancia es privada necesitamos un getter para poder acceder a ella
    */
    public static get instance(): WssService{

        if( !WssService._instance ){

            throw 'WssService is not initialized';
        }

        return WssService._instance;
    }

    public static initWss( options: Options ){

        WssService._instance = new WssService( options );
    }

    public sendMessage( type: string, payload: Object ){

        this.wss.clients.forEach( client => {

            if( client.readyState === WebSocket.OPEN ){

                client.send( JSON.stringify({ type, payload }) );
            }
        })
    }

    public start(){

        /* IMPORTANTE importar WebSocket desde ws porque si de lo contrario por defecto usa el de node y tiene otros métodos */

        this.wss.on('connection' , ( ws: WebSocket ) => {

            console.log('Client connected');

            ws.on('close' , () => {

                console.log('client disconnected');
            })
        })
    }
}