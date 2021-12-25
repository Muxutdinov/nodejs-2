const Events = require("events")
const uuid = require("uuid")

console.log(uuid.v4());

class Logger extends Events{
    log(value,result){
        this.emit("message", {id:uuid.v4(),value,result})
    }
}

module.exports = Logger