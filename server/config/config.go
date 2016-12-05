package config

import (
	"path/filepath"

	"github.com/spf13/viper"
)

type BroodConfig struct {
	Server server // Webserver config
	Ceph   ceph   // Ceph config
}

type server struct {
	Address      string // Address to bind on
	Port         string // Port for web interface to listen on
	ListenString string // Complete string of address:port to listen on
}

type ceph struct {
	ConfigsPath string // Path where ceph cluster configs can be found
}

// LoadConfig retrieves data needed to start the server
func LoadConfig(configFile string) (config BroodConfig, confError error) {
	viper.SetEnvPrefix("brood")

	// Set defaults
	viper.SetDefault("address", "0.0.0.0")
	viper.SetDefault("port", "3456")

	filename := filepath.Base(configFile)
	viper.SetConfigName(filename[:len(filename)-len(filepath.Ext(filename))])
	viper.AddConfigPath(filepath.Dir(configFile))
	viper.SetConfigType("json")

	err := viper.ReadInConfig()

	// Set the config
	viper.BindEnv("address")
	config.Server.Address = viper.GetString("address")

	viper.BindEnv("port")
	config.Server.Port = viper.GetString("port")

	config.Server.ListenString = config.Server.Address + ":" + config.Server.Port

	return config, err
}
