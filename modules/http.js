const http = require('http')


//=1
// const Server = http.createServer((req,res)=>{
//     res.write("Hello from Jaxongir")
//     res.end()
// })

// Server.listen(4000,()=>console.log("server runing"))


//=2
http.createServer((req,res)=>res.end("Hello from Jaxongir=> to Nodejs")).listen(4000,()=>console.log("server runing"))