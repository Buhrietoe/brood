PACKAGES = $(shell go list ./... | grep -v /vendor/)

deps:
	glide install

test:
	go test -cover $(PACKAGES)

.PHONY: build
build:
	go install github.com/Buhrietoe/brood

build_frontend:
	cd static; npm install
	cd static; grunt build
	go-bindata-assetfs -nocompress -pkg server -prefix "static" static/dist/...
	mv bindata_assetfs.go server/

run_brood:
	go run main.go server

dev: build_frontend run_brood

package: deps build build_frontend
	rm -rf release
	mkdir -p release/static/dist
	cp $(GOPATH)/bin/brood release/
	cp -r static/dist/* release/static/
	tar -C release -c . | xz -9evT 0 > brood.tar.xz
