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

	"github.com/Buhrietoe/brood/app"
	"github.com/Buhrietoe/brood/app/config"

	"github.com/docopt/docopt-go"
	"github.com/labstack/echo/engine/fasthttp"
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
	args, err := docopt.Parse(usage, nil, true, version, false)
	if err != nil {
		log.Fatalln(err)
	}

	log.SetPrefix("[brood] ")
	log.Println("starting brood")

	if args["server"].(bool) {
		configFile := args["--config"].(string)
		log.Printf("using config: %v\n", configFile)

		err := config.LoadConfig(configFile)
		if err != nil {
			log.Fatalln(err)
		}

		// echo := app.BuildApp(config)
		server := app.BuildApp()
		log.Printf("listening on %v\n", config.ListenString)
		server.Run(fasthttp.New(config.ListenString))
	}
}
