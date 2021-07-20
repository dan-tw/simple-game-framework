// Original file: ../proto/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddPlayerRequest as _AddPlayerRequest, AddPlayerRequest__Output as _AddPlayerRequest__Output } from './AddPlayerRequest';
import type { AddPlayerResponse as _AddPlayerResponse, AddPlayerResponse__Output as _AddPlayerResponse__Output } from './AddPlayerResponse';

export interface TiacTacToeClient extends grpc.Client {
  AddPlayer(argument: _AddPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  AddPlayer(argument: _AddPlayerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  AddPlayer(argument: _AddPlayerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  AddPlayer(argument: _AddPlayerRequest, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _AddPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _AddPlayerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _AddPlayerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  addPlayer(argument: _AddPlayerRequest, callback: (error?: grpc.ServiceError, result?: _AddPlayerResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TiacTacToeHandlers extends grpc.UntypedServiceImplementation {
  AddPlayer: grpc.handleUnaryCall<_AddPlayerRequest__Output, _AddPlayerResponse>;
  
}

export interface TiacTacToeDefinition extends grpc.ServiceDefinition {
  AddPlayer: MethodDefinition<_AddPlayerRequest, _AddPlayerResponse, _AddPlayerRequest__Output, _AddPlayerResponse__Output>
}
