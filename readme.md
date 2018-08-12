# Using Mountebank

Demo code for the usage of mountebank: http://www.mbtest.org/

## Introduction

Mountebank is an open source tool that allows to run multi-protocol test doubles.

This demo will allow to stand up a simple application then record some tests and replay them with mountebank.

### Contents

*   server.js: __nodeJS__ server that presents a local form , taken from: https://stackoverflow.com/questions/15427220/how-to-handle-post-request-in-node-js#19183959

*   Dockerfile: image to run server.js in [Docker](https://www.docker.com/)


### running the app

1.   without installing __nodeJS__ and using __docker-compose__

```docker-compose up --build```

2.  if you don't have/want to use docker and have __nodeJS__ installed:

*   Start the form application:
    *   Navigate to the ./form directory
    *   run: ```node server.js```
