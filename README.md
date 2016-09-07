Brood
=====

Brood is a ceph web management dashboard.

Configuration
-----

Use the following environment variables to configure brood:

    BROOD_ADDRESS=127.0.0.1 // DEFAULT: 0.0.0.0
    BROOD_PORT=1234 // DEFAULT: 3456

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

Cli usage
-----

  	brood server
  	brood --config <config> server
  	brood --help
  	brood --version
