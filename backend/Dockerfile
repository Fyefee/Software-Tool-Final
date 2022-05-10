FROM node:16.14.0-alpine

WORKDIR /usr/app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY ./ ./

EXPOSE 3493

CMD ["npm", "run", "dev"]