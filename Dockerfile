FROM node:alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8124

CMD [ "node", "server.js" ]