#!/bin/bash

./cmd/generate-grpc.sh
./cmd/generate-grpc-web.sh
./cmd/webpack.sh

echo "Done!"