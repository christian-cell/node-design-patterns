import fs from 'fs';
import http from 'http';

const server = http.createServer((req , res) => {

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
});

server.listen(8080 , () => {

    console.log(`server is running at : port 8080`);
})