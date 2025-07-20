FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN rm -rf node_modules && npm install

EXPOSE 3333

CMD [ "npm", "run", "start" ]