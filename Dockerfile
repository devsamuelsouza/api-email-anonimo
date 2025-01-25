FROM node:latest

WORKDIR /app

COPY . .

RUN rm -rf node_modules && npm install

EXPOSE 3000

CMD ["npm", "start"]