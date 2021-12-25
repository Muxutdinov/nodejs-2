const EventEmitter = require("events")

//EventEmitterdan meros olish
class NewEmitter extends EventEmitter{}


//Instans obyekt
const newEmitter = new NewEmitter


// Event listener
newEmitter.on("hello",()=>{
    console.log('Hello Jakhongir');
})

// Qabul qilib olish
newEmitter.emit("hello")
newEmitter.emit("hello")