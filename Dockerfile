FROM node:20.12.0

LABEL authors="GenKnot"

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]