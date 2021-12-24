const url = require("url")

const newUrl = new URL('http://jaxongir.uz:4000/users/user.html?name=Jaxongir&status=active&age=20')


//umumiy url manzil
console.log(newUrl.href);

//domen port bilan
console.log(newUrl.host);

//domenni ozi
console.log(newUrl.hostname);

//manzil
console.log(newUrl.pathname);

//Objected
console.log(newUrl.searchParams);


//parametr
console.log(newUrl.search);

// add new params
newUrl.searchParams.append("firstName","Muxutdinov")
console.log(newUrl.searchParams);


// loop
console.log(newUrl.searchParams.forEach((key,value)=>{
    console.log(`${value}: ${key}`);
}));