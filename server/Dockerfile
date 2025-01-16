FROM node:18-alpine

# create a app directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

# run npm install
RUN npm install

# bundle app source
COPY . .

# expose port
EXPOSE 8080

# start the app
CMD [ "npm", "start" ]