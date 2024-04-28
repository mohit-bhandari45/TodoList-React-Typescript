FROM ubuntu

WORKDIR /backend

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sl https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs 

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 3000

ENTRYPOINT ["node","dist/server.js"]