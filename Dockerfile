FROM node:14.16.1-alpine

WORKDIR /app
EXPOSE 3000

COPY package* /app
RUN npm install

COPY . /app
RUN npm run build

ENTRYPOINT ["npm", "start"]

