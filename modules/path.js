const path = require("path")

//Basename metodi
// console.log(path.basename(__filename));


//Papka nomi
// console.log(path.dirname(__filename));


//Extname
// console.log(path.extname(__filename))


//Object
const pathObj = path.parse(__filename)
// console.log(pathObj);



console.log(path.join(__dirname,'Lesson', 'node-darslar','node.js'));