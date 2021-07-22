/**
 * @fileoverview gRPC-Web generated client stub for game
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_game_pb from '../proto/game_pb';


export class GameServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_game_pb.State,
    (request: proto_game_pb.Player) => {
      return request.serializeBinary();
    },
    proto_game_pb.State.deserializeBinary
  );

  subscribe(
    request: proto_game_pb.Player,
    metadata: grpcWeb.Metadata | null): Promise<proto_game_pb.State>;

  subscribe(
    request: proto_game_pb.Player,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_game_pb.State) => void): grpcWeb.ClientReadableStream<proto_game_pb.State>;

  subscribe(
    request: proto_game_pb.Player,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_game_pb.State) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/game.GameService/Subscribe',
        request,
        metadata || {},
        this.methodInfoSubscribe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/game.GameService/Subscribe',
    request,
    metadata || {},
    this.methodInfoSubscribe);
  }

  methodInfoListGames = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_game_pb.GameList,
    (request: proto_game_pb.Player) => {
      return request.serializeBinary();
    },
    proto_game_pb.GameList.deserializeBinary
  );

  listGames(
    request: proto_game_pb.Player,
    metadata: grpcWeb.Metadata | null): Promise<proto_game_pb.GameList>;

  listGames(
    request: proto_game_pb.Player,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_game_pb.GameList) => void): grpcWeb.ClientReadableStream<proto_game_pb.GameList>;

  listGames(
    request: proto_game_pb.Player,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_game_pb.GameList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/game.GameService/ListGames',
        request,
        metadata || {},
        this.methodInfoListGames,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/game.GameService/ListGames',
    request,
    metadata || {},
    this.methodInfoListGames);
  }

  methodInfoHaveTurn = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_game_pb.State,
    (request: proto_game_pb.Turn) => {
      return request.serializeBinary();
    },
    proto_game_pb.State.deserializeBinary
  );

  haveTurn(
    request: proto_game_pb.Turn,
    metadata: grpcWeb.Metadata | null): Promise<proto_game_pb.State>;

  haveTurn(
    request: proto_game_pb.Turn,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_game_pb.State) => void): grpcWeb.ClientReadableStream<proto_game_pb.State>;

  haveTurn(
    request: proto_game_pb.Turn,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_game_pb.State) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/game.GameService/HaveTurn',
        request,
        metadata || {},
        this.methodInfoHaveTurn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/game.GameService/HaveTurn',
    request,
    metadata || {},
    this.methodInfoHaveTurn);
  }

}

