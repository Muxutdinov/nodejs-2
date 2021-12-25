// const User = require("./users")

// const About = new User("Jaxongir", 20)

// console.log(About);

const Logger = require("./logger")

const logger = new Logger()

logger.on("message",(data)=>{
    console.log("working: " ,data);
})

logger.log('GET','/admin/panal')
// logger.log('POST','/praduct/add')