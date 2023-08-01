//1. Khai bao thu vien http
const http = require('http');
//2. Khai bao host
const host = 'localhost'
//3. Khai bao port cua server
const port =3000 //3000: default port of NodeJS server
//4. Khai bao server
const server = http.createServer((request, respond)=>{
    respond.write("<h1 style='color: red'>Hello</h1>")
    respond.write("<h1>Hello</h1>")
    respond.write("<h1>Hello</h1>")
    respond.write("<h1 style='color: red'>Hello</h1>")
    respond.write("<h1 style='color: red'>Hello</h1>")
    respond.write('<iframe width="560" height="315" src="https://www.youtube.com/embed/fyMgBQioTLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    respond.end()
})
//5. Cho server listen port de chay web
server.listen(port, () =>{
console.log("server is running at http://" + host + ":" + port)
})

