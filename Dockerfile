FROM node:latest

RUN npm install -g angular-cli && npm cache clean && rm -rf ~/.npm

WORKDIR /code

CMD ["npm start"]
