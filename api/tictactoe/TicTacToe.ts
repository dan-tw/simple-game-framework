// Original file: proto/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddPlayerRequest as _tictactoe_AddPlayerRequest, AddPlayerRequest__Output as _tictactoe_AddPlayerRequest__Output } from '../tictactoe/AddPlayerRequest';
import type { AddPlayerResponse as _tictactoe_AddPlayerResponse, AddPlayerResponse__Output as _tictactoe_AddPlayerResponse__Output } from '../tictactoe/AddPlayerResponse';

export interface TicTacToeClient extends grpc.Client {
  AddPlayer(argument: _tictactoe_AddPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  AddPlayer(argument: _tictactoe_AddPlayerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  AddPlayer(argument: _tictactoe_AddPlayerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  AddPlayer(argument: _tictactoe_AddPlayerRequest, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _tictactoe_AddPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _tictactoe_AddPlayerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _tictactoe_AddPlayerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _tictactoe_AddPlayerRequest, callback: (error?: grpc.ServiceError, result?: _tictactoe_AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TicTacToeHandlers extends grpc.UntypedServiceImplementation {
  AddPlayer: grpc.handleUnaryCall<_tictactoe_AddPlayerRequest__Output, _tictactoe_AddPlayerResponse>;
  
}

export interface TicTacToeDefinition extends grpc.ServiceDefinition {
  AddPlayer: MethodDefinition<_tictactoe_AddPlayerRequest, _tictactoe_AddPlayerResponse, _tictactoe_AddPlayerRequest__Output, _tictactoe_AddPlayerResponse__Output>
}
