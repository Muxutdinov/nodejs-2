const fs = require("fs")
const path = require("path")


//Papka yaratish
// fs.mkdir(path.join(__dirname, '/Folder'),{}, (err)=>{
//     if(err) throw err
//     console.log("Folder was creared");
// } )



//File yaratish
// fs.writeFile(path.join(__dirname,'Folder', "fs.js"),"Nodejs orqali yaratildi",(err)=>{
//     if(err) throw err
//     console.log("File was created");
// })



//Fileda ozgarish 
// fs.writeFile(path.join(__dirname,'Folder', "fs.js"),"hello Jaxongir",(err)=>{
//     if(err) throw err
//     console.log("File was created");
// })


//Fileni textga yangi textni qoshib yuboradi
// fs.appendFile(path.join(__dirname,'Folder', "fs.js"),"Nodejs orqali yaratildi",(err)=>{
//     if(err) throw err
//     console.log("File was created");
// })




//Fileni oqish
// fs.readFile(path.join(__dirname,'Folder', "fs.js") , 'utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data);
// })


//File nomi ozgarishi
fs.rename(
 path.join(__dirname,'/Folder', "examplee.txt"),
 path.join(__dirname, '/Folder', 'example.txt'),
 (err)=>{
     if(err) throw err
 }
)
