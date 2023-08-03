//import json server

const jsonserver = require('json-server');


//create server using json server

const server = jsonserver.create()

//setup path for db.json

const router = jsonserver.router('db.json')

//return a middleware used by the json server

const middleware = jsonserver.defaults()


//setup port number

const port = process.env.PORT || 3001 //DEFAULT PORT NUMBER FOR BACKEND

//USE IN SERVER

server.use(middleware)

server.use(router)


//to run the port

server.listen(port,()=>{
  console.log('Json server listening on port 3001');
})