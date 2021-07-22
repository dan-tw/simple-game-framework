import { createServer, IncomingMessage, ServerResponse, Server } from 'http'
import WebSocket, { Server as WebSocketServer } from 'ws';
import fs from 'fs'

// grpc
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader';

// grpcweb
//import * as grpcWeb from 'grpc-web';
import { ProtoGrpcType } from './api/game';
import { BaseGameMap } from './internal/gamemap';
import { Game, GamePlayer } from './internal/game';
//import * as MyGame from 'game-internal';
import { GameMap as TicTacToeGameMap } from './maps/tictactoe.gamemap';
import { Player } from './internal/player';

//import {AddPlayerRequest, AddPlayerResponse} from '../api/tictactoe/grpcweb/proto/test_pb'
//import { _tictactoe_AddPlayerResponse_Outcome } from '../api/tictactoe/AddPlayerResponse';

function AddPlayer(call:any, callback:any) {
    
    console.log(`Lets add a player ${call.request.name}`);

    var theResponse = {message: "Hello tehr!"}
    console.log(theResponse);

    callback(null, theResponse);
}

class GameServer {

    // The http server we use to serve the files that will run the tic tac toe game
    private httpServer : Server

    // The grpc server we use to faciliate communication between the server and client 
    // for the current game state (who's turn, who occupies what spaces, etc) 
    private grpcServer : grpc.Server

    // WebSocketServer that we will be using to listen for incomming ws connections
    // to keep an open stream of game state
    private wsServer : WebSocketServer | null

    // The port we listen on for the http server
    private httpPort : number | string = 8081

    // The port we listen on for the gRPC server
    private grpcPort : number | string = 8082

    // The port we will listen on for incoming websocket connections
    private wssPort : number | undefined = 8083

    // Create our servers
    constructor() {
        this.httpServer = this.createHttpServer();
        this.grpcServer = this.createGrpcServer();
        this.wsServer = null;
    }

    // Creates our http server for serving files and general content relating to the tic tac toe game
    private createHttpServer() : Server {
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
    private createGrpcServer() : grpc.Server {
        var packageDefinition = protoLoader.loadSync('./proto/game.proto');
        var proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
        var server = new grpc.Server();
        server.addService(proto.game.GameService.service, {
            AddPlayer: AddPlayer
        });
        return server;
    }

    // Create the websocket server that we will be using to tell connected players
    // that a state change to the game has been made and that they need to call an update
    private createWebSocketServer() : WebSocketServer {
        return new WebSocketServer({
            port: this.wssPort
        });
    }

    // Begin listening for both the http and gRPC servers that we're using
    public listen() {
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

        // begin listening for incoming websocket connections
        this.wsServer = this.createWebSocketServer();

        // setup some listeners
        this.wsServer.on('connection', function(ws : WebSocket) {
            
        });
    }

    // Returns an instance of our websocket server, or null if it doesn't exist
    public getWebSocketServer() : WebSocketServer | null {
        return this.wsServer;
    }

    // Create a new game with the given name and the given map
    public createGame(name : string, map : BaseGameMap) : Game {
        return new Game(name, map);
    }
}

// create our new tic tac toe server
export const gameServer = new GameServer();
/*gameServer.listen();
console.log("HTTP server listening on 8081");
console.log("gRPC server listening on 8082");
console.log("WS server listening on 8083");*/

let game = gameServer.createGame("Tic Tac Toe", new TicTacToeGameMap());

game.addPlayer(new GamePlayer(new Player("Dan")))
game.addPlayer(new GamePlayer(new Player("Bob")))

game.gameMap.begin();

console.log(game.getGameMap<TicTacToeGameMap>().gameTiles);
console.log(game.players);

game.getGameMap<TicTacToeGameMap>().haveTurn();