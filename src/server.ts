import { createServer, IncomingMessage, ServerResponse, Server } from 'http'
import WebSocket, { Server as WebSocketServer } from 'ws';
import open from 'open'
import fs from 'fs'

// grpc
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader';

// grpcweb
import * as grpcWeb from 'grpc-web';
import { ProtoGrpcType } from '../api/test';
import {AddPlayerRequest, AddPlayerResponse} from '../api/tictactoe/grpcweb/proto/test_pb'
import { _tictactoe_AddPlayerResponse_Outcome } from '../api/tictactoe/AddPlayerResponse';


function AddPlayer(call:any, callback:any) {
    
    console.log(`Lets add a player ${call.request.name}`);

    var theResponse = {message: "Hello tehr!"}
    var x = new AddPlayerResponse();
        console.log(theResponse);

    callback(null, theResponse);
}

function getServer(): grpc.Server {
    const packageDefinition = protoLoader.loadSync('./proto/test.proto');
    const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
    const server = new grpc.Server();
    server.addService(proto.tictactoe.TicTacToe.service, {
        AddPlayer: AddPlayer
    });
    return server;
}
const grpcServer = getServer();


grpcServer.bindAsync("localhost:8082", grpc.ServerCredentials.createInsecure(),
(err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      grpcServer.start();
    }
});

class MyServer {

    private server:Server

    constructor() {
        this.server = createServer((request: IncomingMessage, response: ServerResponse) => {
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
                "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, X-User-Agent, X-Grpc-Web",
                "Access-Control-Max-Age": 2592000, // 30 days
                /** add other headers as per requirement */
              };

              if(request.url == "/")
                request.url = "/index.html"
                
              //console.log("wanna read " + __dirname + '/www' + request.url);
              fs.readFile(__dirname.replace(/src/, "") + 'www' + request.url, function (err,data) {
                if (err) {
                  response.writeHead(404);
                  response.end(JSON.stringify(err));
                  return;
                }
                response.writeHead(200, headers);
                response.end(data);
              });
          });
    }

    listen() {
        this.server.listen(8081);
    }
}

console.log("HTTP server listening on 8081");
var myServer = new MyServer();
myServer.listen();
/*
const wss = new WebSocketServer({ port: 8081 });
wss.on("connection", function name(socket: WebSocket, req: IncomingMessage) {
    console.log("Got a connection");
});*/

// grpcwebproxy --backend_addr=localhost:8082 --run_tls_server=false


//const ws = new WebSocket("ws://10.115.11.169:8081");
//open("http://10.115.11.169:8080");