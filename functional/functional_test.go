package functional

import (
	"log"
	"net"
	"net/http"
	"testing"
	"time"

	"github.com/Buhrietoe/brood/server"
)

var listenSocket string

func init() {
	listenSocket = "http://" + startTestServer()
}

func startTestServer() (address string) {
	// Build web server
	serv := server.BuildServer()

	// Find an open port
	listenSocket, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		log.Fatalf("could not create socket for server: %s\n", err)
	}
	err = listenSocket.Close()
	if err != nil {
		log.Fatalf("could not close socker for server: %s\n", err)
	}
	log.Printf("found available port: %s\n", listenSocket.Addr().String())

	log.Printf("listening on %v\n", listenSocket.Addr().String())
	go func() {
		err := serv.Run(listenSocket.Addr().String())
		if err != nil {
			log.Fatalln(err)
		}
	}()

	// It might take time to bind server socket
	time.Sleep(time.Second)
	return listenSocket.Addr().String()
}

func TestServerHealth(t *testing.T) {
	result, err := http.Get(listenSocket + "/ping")
	if err != nil {
		t.Error(err)
	}
	if result.StatusCode != 200 {
		t.Errorf("expected 200, got %v", result.StatusCode)
	}
}

func TestAPIV1Health(t *testing.T) {
	result, err := http.Get(listenSocket + "/api/v1/ping")
	if err != nil {
		t.Error(err)
	}
	if result.StatusCode != 200 {
		t.Errorf("expected 200, got %v", result.StatusCode)
	}
}
