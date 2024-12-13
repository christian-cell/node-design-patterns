import express from 'express';
import path from 'path';

interface Options{
    port:              number;
    public_path?:      string;
}

export class Server{

    private app = express();
    private readonly port :number;
    private readonly publicPath : string;

    constructor(
        options:                         Options
    ){
        const { port , public_path = 'public' } = options || {};
    
        this.port = port;
        this.publicPath = public_path;
    }

    public async start(){

        /* 
        * Middlewares
        */

        /* 
        * public folder
        */

        this.app.use(express.static( this.publicPath ));

        this.app.get('*' , (req , res) =>{

            const { url } = req || {};
            
            console.log( url );

            // res.send('Hola Mundo');

            // si encontramos un path que no este en public lo enviamos a la página de turno

            /* 
            * Con __dirname accedemos a la ruta absoluta
            */

            const indexPath = path.join( `${__dirname}../../../${this.publicPath}/index.html` );

            res.sendFile(indexPath);

            return ;
        });

        this.app.listen(3000 , () => {

            console.log(`Server running on port 3000`)
        })
    }
}