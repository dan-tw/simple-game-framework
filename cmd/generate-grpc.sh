#!/bin/bash

# vars
PROTO_FILE=./proto/game.proto
DIR=./
OUT_DIR=./src/api

# generate the grpc code for server-side
./node_modules/.bin/proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=$OUT_DIR $PROTO_FILE