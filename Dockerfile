FROM node:12.20.1

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
