package config

import (
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/Buhrietoe/brood/server"
	"github.com/Buhrietoe/brood/server/apiv1/auth"
	"github.com/spf13/viper"
)

type BroodConfig struct {
	Server server.Server // Webserver config
	Auth   auth.Auth     // Auth config
}

// Load retrieves data needed to start the server
func Load(configFile string) (config BroodConfig) {
	viper.SetEnvPrefix("brood")
	viper.SetConfigType("toml")
	viper.SetConfigName("brood")
	viper.AddConfigPath(filepath.Dir(configFile))
	viper.AddConfigPath(".")
	viper.AddConfigPath("/etc/brood/")

	// If the configFile specified exists, explicitly use it
	if _, err := os.Stat(configFile); err == nil {
		viper.SetConfigFile(configFile)
	}

	// Set defaults
	config.Server.Address = "127.0.0.1"
	config.Server.Port = "3456"

	// Find and read config
	viper.ReadInConfig()
	configFileUsed := viper.ConfigFileUsed()
	if configFileUsed != "" {
		log.Printf("using config: %s", viper.ConfigFileUsed())
	} else {
		log.Println("could not find config, using defaults")
	}

	// This allows us to use environment variables that map directly to our nested BroodConfig struct
	// env var named BROOD_SERVER_PORT will nest properly to config.Server.Port in our struct
	replacer := strings.NewReplacer(".", "_")
	viper.SetEnvKeyReplacer(replacer)

	// Bind env vars
	viper.BindEnv("server.address")
	viper.BindEnv("server.port")

	// Load config into BroodConfig struct
	viper.Unmarshal(&config)

	// Additional values to set
	config.Server.ListenString = config.Server.Address + ":" + config.Server.Port

	return
}
