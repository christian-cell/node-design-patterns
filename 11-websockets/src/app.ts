import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

    /* 
    * con ws obtenemos info del cliente que se está conectando
    */

    console.log(ws);

    console.log('Client connected');

    ws.on('error', console.error);

    ws.on('message', function message(data) {

        const payload = JSON.stringify({

            type : 'custom-message',
            payload: data.toString().toUpperCase()
        });

        /* 
        * broadCast para varios clientes todos inluyendo el emisor
        */
        /* wss.clients.forEach(function each(client) {

            if (client.readyState === WebSocket.OPEN) {
            
                client.send(payload, { binary: false });
            }
        }); */

        /* 
        * broadCast para varios clientes todos excluyendo el emisor
        */
        wss.clients.forEach(function each(client) {

            if (client !== ws && client.readyState === WebSocket.OPEN) {
            
                client.send(payload, { binary: false });
            }
        });
    });

    // ws.send('Hola desde el servidor!');

    ws.on('close' , () =>{

        console.log('client disconnected');
    })

   /*  setInterval(() => {

        ws.send('Hola de nuevo');
    }, 2000)  */
});

console.log('Server running on port http://localhost:3000');