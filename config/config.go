package config

import (
	"log"
	"path/filepath"

	"github.com/spf13/viper"
)

var (
	Address      = "" // Address to bind on
	Port         = "" // Port for web interface to listen on
	ListenString = "" // Complete string of address:port to listen on
)

// LoadConfig retrieves data needed to start the server
func LoadConfig(configFile string) error {
	viper.SetEnvPrefix("brood")

	// Set defaults
	viper.SetDefault("address", "0.0.0.0")
	viper.SetDefault("port", "3456")

	filename := filepath.Base(configFile)
	viper.SetConfigName(filename[:len(filename)-len(filepath.Ext(filename))])
	viper.AddConfigPath(filepath.Dir(configFile))
	viper.SetConfigType("yaml")
	err := viper.ReadInConfig()
	if err != nil {
		log.Printf("unable to read config file %v: %v\n", configFile, err)
	}

	// Set the config
	viper.BindEnv("address")
	Address = viper.GetString("address")

	viper.BindEnv("port")
	Port = viper.GetString("port")

	ListenString = Address + ":" + Port

	return nil
}
