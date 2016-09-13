Brood
=====

Brood is a web management dashboard that makes running ceph with OpenShift easy. Brood aims to make the day to day tasks of managing ceph with OpenShift as easy as possible through a clean web interface.

Cli usage
-----

  	brood server
  	brood --config <config> server
  	brood --help
  	brood --version

Configuration
-----

Use the following environment variables to configure brood:

    BROOD_ADDRESS=127.0.0.1 # DEFAULT: 0.0.0.0
    BROOD_PORT=1234 # DEFAULT: 3456

Configuration can also be done in a json/yaml/toml file. If there is a problem reading the file, brood will continue with its defaults.

**YAML**

    address: 127.0.0.1
    port: 1234

**JSON**

    {
      "address": "127.0.0.1",
      "port": "1234"
    }

**TOML**

    address = 127.0.0.1
    port = 1234

Development
-----

Dependencies:

* go
* glide
* npm
* grunt

This project uses a Makefile that includes testing, building, and development functions.

First time setup:

    make deps

Run tests:

    make test

Run brood in development:

    make dev

Build a release: (brood.tar.xz)

    make release
