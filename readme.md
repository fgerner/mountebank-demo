# Using Mountebank

Demo code for the usage of mountebank: http://www.mbtest.org/

## Introduction

Mountebank is an open source tool that allows to run multi-protocol test doubles.

This demo will allow to stand up a simple application then record some tests and replay them with mountebank.

Also there will be mention of possible alternatives and how does Mountebank stacks against them.

### Installing pre-requisites

#### Installing mountebank

*   Download the option you need depending on your OS from http://www.mbtest.org/docs/install look at the links for the option: _Self-contained archives_
````
$ wget --no-check-certificate https://s3.amazonaws.com/mountebank/v1.14/mountebank-v1.14.1-darwin-x64.tar.gz
````
*   Expand the downloaded file wherever you will be using it
````
$ tar -xvf mountebank-v1.14.1-darwin-x64.tar.gz
````
*   Navigate to the directory and execute the script
````
runnerdave-mac:mountebank-v1.14.1-darwin-x64 p766894$ ./mb
info: [mb:2525] mountebank v1.14.1 now taking orders - point your browser to http://localhost:2525 for help
````

#### Installing Stubby4J (optional)
*   Follow the instructions from their github repo:    https://github.com/azagniotov/stubby4j#quick-start-example. Download the jar file and create a simple .yml file with the following contents (i.e. hello-world-config.yml):
````yml
-  request:
      method: GET
      url: /hello-world
 
   response:
      status: 200
      headers:
         content-type: application/json
      body: Hello World!

-  request:
      method: POST
      url: /create-customer

   response:
      status: 200
      headers:
         content-type: application/json
      body: >
         { "ok": "Customer created" }
````
Then run the app like so:
````bash
$ java -jar stubby4j-6.0.1.jar -d hello-world-config.yml
````
Your endpoints are:
*   GET: http://localhost:8882/hello-world
*   POST: http://localhost:8882/create-customer

### Contents

*   server.js: __nodeJS__ server that presents a local form , taken from: https://stackoverflow.com/questions/15427220/how-to-handle-post-request-in-node-js#19183959

*   Dockerfile: image to run server.js in [Docker](https://www.docker.com/)


### running the app

1.   without installing __nodeJS__ and using __docker-compose__

```docker-compose up --build```

1.  if you don't have/want to use docker and have __nodeJS__ installed:

*   Start the form application:
    *   Navigate to the ./form directory
    *   run: ```node server.js```

*   Start the api application:
    *   Navigate to the ./api directory
    *   run: ```node api.js```
    

## References

*   Martin Fowler, Mocks Aren't Stubs https://martinfowler.com/articles/mocksArentStubs.html
