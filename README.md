# Tecnical test iDO

> This project is a technical test for iDO

## Technologies
- Node.js 12.16.1
- EcmaScript 6, 7, 8
- nvm

## Dependencies
- **Express** Framework web for Node.js
- **JsonWebToken** Gerator of JSON web Tokens for security
- **Morgan** Request logger

## Developer Dependencies
- **Jest** JavaScript testing framework
- **Eslint** A linter tool for identifying and reporting on patterns in JavaScript
- **Eslint plugins for standard** Rules standard for **Eslint**

## Install
> This project requires **Node.js** v12.16.1 or later
1. Use node version for project in file .nvmrc
``` shell
$ nvm use
```
2. Install dependencies
``` shell
$ npm install
```

## Config
> This project use `dotenv` then you have to copy `.env.example` file and rename as `.env`

## Run
``` shell
$ npm start
```

## Run develop
``` shell
$ npm run dev
```

## Run test
``` shell
$ npm test
```


## Endpoints
- **POST:** http://localhost:3000/login you should send on request body "`{ username: '{:USERNAME}' }`"
- **GET:**  http://localhost:3000/verify you should send on request header `toke: {:TOKEN}`
