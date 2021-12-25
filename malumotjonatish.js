
const http = require("http")
const path = require('path')
const fs = require('fs')


const Server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,"poblic",'index.html'),(err,data)=>{
          if(err) throw err
          res.end(data)
          res.writeHead(200,{"Content-Type":"text/html"})
        })
    }else if(req.url === '/about'){
        fs.readFile(path.join(__dirname,"poblic",'about.html'),(err,data)=>{
            if(err) throw err
            res.end(data)
            res.writeHead(200,{"Content-Type":"text/html"})
          })
    }
})

const  PORT = process.env.PORT || 2000

Server.listen(PORT,()=>console.log(`Server working on port :${PORT}`))