# Using Mountebank

Demo code for the usage of mountebank: http://www.mbtest.org/

## Introduction

Mountebank is an open source tool that allows to run multi-protocol test doubles.

This demo will allow to stand up a simple application then record some tests and replay them with mountebank.

### Contents

*   server.js: _Node.js_ server that presents a local form , taken from: https://stackoverflow.com/questions/15427220/how-to-handle-post-request-in-node-js#19183959

*   Dockerfile: image to run server.js in [Docker](https://www.docker.com/)