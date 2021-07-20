import { createServer, IncomingMessage, ServerResponse, Server } from 'http'
import WebSocket, { Server as WebSocketServer } from 'ws';
import open from 'open'

// grpc
import * as grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

// grpcweb
import * as grpcWeb from 'grpc-web'
import { TiacTacToeClient } from './api/grpcweb/TestServiceClientPb';
import {AddPlayerRequest, AddPlayerResponse} from './api/grpcweb/test_pb'

console.log(protoLoader);

var playerRequest = new AddPlayerRequest();

//class TicTacToeService extends grpc.ServiceDefinition

var grpcServer = new grpc.Server();

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
wss.on("connection", function name(socket: WebSocket, req: IncomingMessage) {
    console.log("Got a connection");
});

// grpcwebproxy --backend_addr=localhost:8082 --run_tls_server=false


const ws = new WebSocket("ws://10.115.11.169:8081");
//open("http://10.115.11.169:8080");