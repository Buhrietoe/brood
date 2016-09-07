package config

import (
	"os"
	"testing"
)

func TestLoadConfig(t *testing.T) {
	os.Setenv("BROOD_ADDRESS", "127.0.0.1")
	os.Setenv("BROOD_PORT", "1234")

	LoadConfig("")

	if ListenString != "127.0.0.1:1234" {
		t.Errorf("Config ListenString expected '127.0.0.1:1234', got %v\n", ListenString)
	}
}
