import fs from 'fs';
import http2 from 'http2';

const server = http2.createSecureServer( {

    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt')
} , (req , res) => {

    const { url } = req || {};

    console.log( 'url : ' , url );

    /* res.writeHead(200 ,  {'Content-Type': 'text/html'})
    res.write(`<h1> URL ${url} </h1>`);
    res.end(); */

    /* const data = {name:'jhon', age:30, city: 'New York'};
    res.writeHead(200 , {'Content-Type': 'application/json'});
    res.end( JSON.stringify(data) ); */

    if( url === '/' ){

        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        
        res.writeHead(200 , {'Content-Type': 'text/html'});

        res.end(htmlFile);
    
    } 

    /* try {
        
        const responseContent = fs.readFileSync(`./public${url}`);

        res.end(responseContent);

    } catch (error) {
     
        res.writeHead(404 , {'Content-Type': 'text/html'});

        res.end();
    } */
});

server.listen(8080 , () => {

    console.log(`server is running at : port 8080`);
})