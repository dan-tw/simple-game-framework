import * as grpcWeb from 'grpc-web';
const { TicTacToeClient } = require('../api/tictactoe/grpcweb/proto/TestServiceClientPb');
const {AddPlayerRequest, AddPlayerResponse} = require('../api/tictactoe/grpcweb/proto/test_pb');

var client = new TicTacToeClient("http://localhost:8080", null, null);

/*var playerRequest = new AddPlayerRequest();
playerRequest.setName("Bobthebuilder");

const call = client.addPlayer(playerRequest, {'custom-header-1': 'value1'}, (err: grpcWeb.Error, response: typeof AddPlayerResponse) => {
    console.log(response.getMessage());
});*/