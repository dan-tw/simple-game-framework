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

class TicTacToeServer {

    // The http server we use to serve the files that will run the tic tac toe game
    private httpServer : Server

    // The grpc server we use to faciliate communication between the server and client 
    // for the current game state (who's turn, who occupies what spaces, etc) 
    private grpcServer : grpc.Server

    // The port we listen on for the http server
    private httpPort : number | string = 8081

    // The port we listen on for the gRPC server
    private grpcPort : number | string = 8082

    // Create our servers
    constructor() {
        this.httpServer = this.createHttpServer();
        this.grpcServer = this.createGrpcServer();
    }

    // Creates our http server for serving files and general content relating to the tic tac toe game
    createHttpServer() : Server {
        return createServer((request: IncomingMessage, response: ServerResponse) => {
            if(request.url == "/")
              request.url = "/index.html"
              
            fs.readFile(__dirname.replace(/src/, "") + 'www' + request.url, function (err,data) {
              if (err) {
                response.writeHead(404);
                response.end(JSON.stringify(err));
                return;
              }
              response.writeHead(200);
              response.end(data);
            });
        });
    }

    // Creates the gRPC server that we will be using to make rpc calls to handle the game state
    createGrpcServer() : grpc.Server {
        var packageDefinition = protoLoader.loadSync('./proto/test.proto');
        var proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
        var server = new grpc.Server();
        server.addService(proto.tictactoe.TicTacToe.service, {
            AddPlayer: AddPlayer
        });
        return server;
    }

    // Begin listening for both the http and gRPC servers that we're using
    listen() {
        // begin http server listening
        this.httpServer.listen(this.httpPort);

        // begin listening for the grpc server
        this.grpcServer.bindAsync("localhost:" + this.grpcPort, grpc.ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
            if (err) {
                console.error(`Server error: ${err.message}`);
            } else {
                console.log(`Server bound on port: ${port}`);
                this.grpcServer.start();
            }
        });
    }
}


var myServer = new TicTacToeServer();
myServer.listen();
console.log("HTTP server listening on 8081");
console.log("gRPC server listening on 8082");