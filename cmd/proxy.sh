#!/bin/bash

grpcwebproxy --backend_addr=localhost:8082 --run_tls_server=false --allow_all_origins