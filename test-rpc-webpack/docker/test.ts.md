
https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/echo


docker run -d --name demo-java-server jcr.botaoyx.com/img/example/demo-java-server:140-dev-afeed55b

docker run -d --name envoy -p 50051:8080 --link demo-java-server:demo-java-server jcr.botaoyx.com/img/example/envoy:tmp

docker run -d -p 8081:8081 --name js-text grpcweb/ts-client:text



https://github.com/improbable-eng/grpc-web/tree/master/client/grpc-web


# docker run --rm -it --mount type=bind,source="$(pwd)"/ts-example,dst=/tmp/ts-example grpcweb/ts-client:text bash
# https://www.npmjs.com/package/grpc-web
protoc internal.proto  --js_out=import_style=commonjs,binary:grpc --grpc-web_out=import_style=typescript,mode=grpcweb:grpc

//protoc internal.proto  --js_out=import_style=commonjs,binary:js --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:gcts

