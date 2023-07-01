FROM node:20.3.1

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3030

CMD [ "node", "server.js" ]