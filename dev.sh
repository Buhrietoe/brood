#!/bin/bash

# Check dependencies
if [ -z "$(which npm 2>/dev/null)" ]; then
  echo Please install npm!
  exit 1
fi
if [ -z "$(which grunt 2>/dev/null)" ]; then
  echo Please install grunt!
  exit 1
fi
if [ -z "$(which go 2>/dev/null)" ]; then
  echo Please install go!
  exit 1
fi

# Make sure we are in root of project
if [ ! -d "static" ]; then
  echo Run me from project root!
  exit 1
fi
cd static

# Check if npm install has been performed
if [ ! -d "node_modules" ]; then
  npm install
fi

# Build/Uglify UI code
grunt build
cd ..

# Run brood server
go run main.go server $@
