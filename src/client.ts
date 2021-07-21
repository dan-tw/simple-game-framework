//const {AuthMessage, ResponseMessage} = require('./test_pb.js');
//const {WsChatClient} = require('./test_grpc_web_pb.js');

//import * as grpcWeb from 'grpc-web';
import * as grpcWeb from 'grpc-web';
const { TicTacToeClient } = require('../api/tictactoe/grpcweb/proto/TestServiceClientPb');
const {AddPlayerRequest, AddPlayerResponse} = require('../api/tictactoe/grpcweb/proto/test_pb');

var client = new TicTacToeClient("http://localhost:8080", null, null);

var playerRequest = new AddPlayerRequest();
playerRequest.setName("Bobthebuilder");

//const call = client.addPlayer(playerRequest);

const call = client.addPlayer(playerRequest, {'custom-header-1': 'value1'},
  (err: grpcWeb.Error, response: typeof AddPlayerResponse) => {
    console.log(err);
    console.log(response.getOutcome());
    console.log(response.getMessage());
  });
call.on('data', (response: typeof AddPlayerResponse) => {
    console.log(response.getOutcome());
    console.log(response.getMessage());
});

  



/*import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './api/test';
import { AddPlayerResponse } from './api/tictactoe/AddPlayerResponse';

const packageDefinition = protoLoader.loadSync('./proto/test.proto');
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
var client = new proto.tictactoe.TicTacToe("localhost:8082", grpc.credentials.createInsecure());



//addPlayer(argument: _tictactoe_AddPlayerRequest, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;

const call = client.addPlayer({name: "NBOBOBOB"}, (err: grpc.ServiceError | undefined, response: AddPlayerResponse | undefined) => {
    if(response !== undefined) {
        console.log(`Response is ${response}`);
        console.log(response);
    }

    if(err !== undefined)
        console.log(`Error is: ${err}`);
  });*/