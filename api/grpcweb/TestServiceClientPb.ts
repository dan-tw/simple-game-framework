/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_test_pb from '../proto/test_pb';


export class TiacTacToeClient {
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

  methodInfoAddPlayer = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_test_pb.AddPlayerResponse,
    (request: proto_test_pb.AddPlayerRequest) => {
      return request.serializeBinary();
    },
    proto_test_pb.AddPlayerResponse.deserializeBinary
  );

  addPlayer(
    request: proto_test_pb.AddPlayerRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_test_pb.AddPlayerResponse>;

  addPlayer(
    request: proto_test_pb.AddPlayerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_test_pb.AddPlayerResponse) => void): grpcWeb.ClientReadableStream<proto_test_pb.AddPlayerResponse>;

  addPlayer(
    request: proto_test_pb.AddPlayerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_test_pb.AddPlayerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TiacTacToe/AddPlayer',
        request,
        metadata || {},
        this.methodInfoAddPlayer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TiacTacToe/AddPlayer',
    request,
    metadata || {},
    this.methodInfoAddPlayer);
  }

}

