FROM node:16-alpine as build-step

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]