// Copyright © 2016 Jason Gardner <buhrietoe@gmail.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Brood is a backup and restore utility for ceph clusters

package main

import (
	"log"

	"github.com/Buhrietoe/brood/server"
	"github.com/Buhrietoe/brood/server/config"

	"github.com/docopt/docopt-go"
)

const version = "brood 0.1.0"
const usage = `
Usage:
	brood server
	brood --config <config> server
	brood --help
	brood --version

Options:
	--config <config>            The brood config [default: /etc/brood/brood.json].
	--help                       Show this screen.
	--version                    Show version.
`

func main() {
	// Parse args
	args, argsErr := docopt.Parse(usage, nil, true, version, false)
	if argsErr != nil {
		log.Fatalln(argsErr)
	}

	log.SetPrefix("[brood] ")
	log.Println("starting brood")

	// Server command specified
	if args["server"].(bool) {
		// Load config
		configFile := args["--config"].(string)
		log.Printf("using config: %v\n", configFile)

		config, configError := config.LoadConfig(configFile)
		if configError != nil {
			log.Printf("unable to read config file %v: %v\n", configFile, configError)
		}

		// Build and run web server
		serv := server.BuildServer()
		log.Printf("listening on %v\n", config.Server.ListenString)
		if serverError := serv.Run(config.Server.ListenString); serverError != nil {
			log.Printf("shit broke: %v\n", serverError)
		}
	}
}
