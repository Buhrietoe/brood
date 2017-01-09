package config

import (
	"os"
	"testing"
)

func TestLoad(t *testing.T) {
	os.Setenv("BROOD_SERVER_ADDRESS", "127.0.0.1")
	os.Setenv("BROOD_SERVER_PORT", "1111")

	testConfig := Load("")

	if testConfig.Server.ListenString != "127.0.0.1:1111" {
		t.Errorf("Server ListenString expected '127.0.0.1:1111', got %v\n", testConfig.Server.ListenString)
	}
}
