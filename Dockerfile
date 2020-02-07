FROM node:current-alpine

WORKDIR /src

COPY package.json .

RUN npm install --production

COPY . .

ENV PORT=8080

CMD [ "node","server.js" ]