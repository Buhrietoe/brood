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

    BROOD_SERVER_ADDRESS=127.0.0.1 # DEFAULT
    BROOD_SERVER_PORT=1234 # DEFAULT: 3456

Configuration can also be done in a toml file. If there is a problem reading the file, brood will continue with its defaults.

**TOML**

    [server]
        address = 127.0.0.1
        port = 1234
    [auth.oauth]
        host = "openshift.default.svc.cluster.local"
        clientId = "openshift-challenging-client"
        responseType = "token"

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
