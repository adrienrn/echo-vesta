FROM node:10

WORKDIR /app
COPY package.json yarn.lock ./

COPY . .

EXPOSE 3000
EXPOSE 35729

RUN yarn install
