#!/bin/bash

rm -rf ../api/grpcweb
rm -rf ../api/proto

protoc -I=../. ../proto/test.proto   --js_out=import_style=commonjs,binary:../api   --grpc-web_out=import_style=typescript,mode=grpcwebtext:../api

mv ../api/proto ../api/grpcweb