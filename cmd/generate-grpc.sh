#!/bin/bash

PROTO_FILE=./proto/test.proto
DIR=./
OUT_DIR=./api

./node_modules/.bin/proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=$OUT_DIR $PROTO_FILE