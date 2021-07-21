#!/bin/bash

PROTO_FILE=./proto/test.proto
DIR=./
OUT_DIR=./api/tictactoe/grpcweb

#remove old generated files
rm -rf $OUT_DIR/proto
rm -rf $OUT_DIR/proto

# generate new files
#protoc -I=../. ../proto/test.proto   --js_out=import_style=commonjs,binary:../api/tictactoe/grpcweb   --grpc-web_out=import_style=typescript,mode=grpcwebtext:../api/tictactoe/grpcweb

#grpcweb
#protoc -I=./. ./proto/test.proto \
#  --js_out=import_style=binary:./api/tictactoe/grpcweb2 \
#  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./api/tictactoe/grpcweb2


protoc -I=$DIR $PROTO_FILE \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR