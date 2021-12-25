// const User = require("./users")

// const About = new User("Jaxongir", 20)

// console.log(About);

// const Logger = require("./logger")

// const logger = new Logger()

// logger.on("message",(data)=>{
    // console.log("working: " ,data);
// })

// logger.log('GET','/admin/panal')
// logger.log('POST','/praduct/add')


const http = require("http")
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{

})

const PORT = process.env.PORT || 2000;

server.listen(PORT,()=>console.log("Server started working"))