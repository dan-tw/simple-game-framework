// Original file: proto/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GameList as _game_GameList, GameList__Output as _game_GameList__Output } from '../game/GameList';
import type { Player as _game_Player, Player__Output as _game_Player__Output } from '../game/Player';
import type { State as _game_State, State__Output as _game_State__Output } from '../game/State';
import type { Turn as _game_Turn, Turn__Output as _game_Turn__Output } from '../game/Turn';

export interface GameServiceClient extends grpc.Client {
  HaveTurn(argument: _game_Turn, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  HaveTurn(argument: _game_Turn, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  HaveTurn(argument: _game_Turn, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  HaveTurn(argument: _game_Turn, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _game_Turn, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _game_Turn, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _game_Turn, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  haveTurn(argument: _game_Turn, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  
  ListGames(argument: _game_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  ListGames(argument: _game_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  ListGames(argument: _game_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  ListGames(argument: _game_Player, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _game_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _game_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _game_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  listGames(argument: _game_Player, callback: (error?: grpc.ServiceError, result?: _game_GameList__Output) => void): grpc.ClientUnaryCall;
  
  Subscribe(argument: _game_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  Subscribe(argument: _game_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  Subscribe(argument: _game_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  Subscribe(argument: _game_Player, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _game_Player, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _game_Player, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _game_Player, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  subscribe(argument: _game_Player, callback: (error?: grpc.ServiceError, result?: _game_State__Output) => void): grpc.ClientUnaryCall;
  
}

export interface GameServiceHandlers extends grpc.UntypedServiceImplementation {
  HaveTurn: grpc.handleUnaryCall<_game_Turn__Output, _game_State>;
  
  ListGames: grpc.handleUnaryCall<_game_Player__Output, _game_GameList>;
  
  Subscribe: grpc.handleUnaryCall<_game_Player__Output, _game_State>;
  
}

export interface GameServiceDefinition extends grpc.ServiceDefinition {
  HaveTurn: MethodDefinition<_game_Turn, _game_State, _game_Turn__Output, _game_State__Output>
  ListGames: MethodDefinition<_game_Player, _game_GameList, _game_Player__Output, _game_GameList__Output>
  Subscribe: MethodDefinition<_game_Player, _game_State, _game_Player__Output, _game_State__Output>
}
