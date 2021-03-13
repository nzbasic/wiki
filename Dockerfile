FROM node:14
WORKDIR /usr/src/app
COPY package*.json .
RUN npm i
RUN npm i -g serve
COPY . .
RUN npm run build 
EXPOSE 80
CMD [ "serve", "" ]