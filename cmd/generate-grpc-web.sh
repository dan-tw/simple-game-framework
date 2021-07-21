#!/bin/bash

PROTO_FILE=./proto/test.proto
DIR=./
OUT_DIR=./api/tictactoe/grpcweb

#remove old generated files
rm -rf $OUT_DIR/proto

# generate the files for grpc-web (client side)
protoc -I=$DIR $PROTO_FILE \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR