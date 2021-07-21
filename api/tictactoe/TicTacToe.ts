// Original file: proto/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GameList as _tictactoe_GameList, GameList__Output as _tictactoe_GameList__Output } from '../tictactoe/GameList';
import type { Player as _tictactoe_Player, Player__Output as _tictactoe_Player__Output } from '../tictactoe/Player';
import type { State as _tictactoe_State, State__Output as _tictactoe_State__Output } from '../tictactoe/State';
import type { Turn as _tictactoe_Turn, Turn__Output as _tictactoe_Turn__Output } from '../tictactoe/Turn';

export interface TicTacToeClient extends grpc.Client {
  HaveTurn(argument: _tictactoe_Turn, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  HaveTurn(argument: _tictactoe_Turn, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  HaveTurn(argument: _tictactoe_Turn, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  HaveTurn(argument: _tictactoe_Turn, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _tictactoe_Turn, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _tictactoe_Turn, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _tictactoe_Turn, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _tictactoe_Turn, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  
  ListGames(argument: _tictactoe_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  ListGames(argument: _tictactoe_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  ListGames(argument: _tictactoe_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  ListGames(argument: _tictactoe_Player, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _tictactoe_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _tictactoe_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _tictactoe_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _tictactoe_Player, callback: (error?: grpc.ServiceError, result?: _tictactoe_GameList__Output) => void): grpc.ClientUnaryCall;
  
  Subscribe(argument: _tictactoe_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  Subscribe(argument: _tictactoe_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  Subscribe(argument: _tictactoe_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  Subscribe(argument: _tictactoe_Player, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _tictactoe_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _tictactoe_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _tictactoe_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _tictactoe_Player, callback: (error?: grpc.ServiceError, result?: _tictactoe_State__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TicTacToeHandlers extends grpc.UntypedServiceImplementation {
  HaveTurn: grpc.handleUnaryCall<_tictactoe_Turn__Output, _tictactoe_State>;
  
  ListGames: grpc.handleUnaryCall<_tictactoe_Player__Output, _tictactoe_GameList>;
  
  Subscribe: grpc.handleUnaryCall<_tictactoe_Player__Output, _tictactoe_State>;
  
}

export interface TicTacToeDefinition extends grpc.ServiceDefinition {
  HaveTurn: MethodDefinition<_tictactoe_Turn, _tictactoe_State, _tictactoe_Turn__Output, _tictactoe_State__Output>
  ListGames: MethodDefinition<_tictactoe_Player, _tictactoe_GameList, _tictactoe_Player__Output, _tictactoe_GameList__Output>
  Subscribe: MethodDefinition<_tictactoe_Player, _tictactoe_State, _tictactoe_Player__Output, _tictactoe_State__Output>
}
