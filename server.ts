import { createServer, IncomingMessage, ServerResponse, Server } from 'http'
import WebSocket, { Server as WebSocketServer } from 'ws';

class MyServer {

    private server:Server

    constructor() {
        this.server = createServer((request: IncomingMessage, response: ServerResponse) => {
            response.end('Hello world!');
          });
    }

    listen() {
        this.server.listen(8080);
    }
}

var myServer = new MyServer();
myServer.listen();

const wss = new WebSocketServer({ port: 8081 });
wss.on("connection", function name(socket, req) {
    console.log("Got a connection");
});


const ws = new WebSocket("ws://localhost:8081");