const { resolve } = require("path");
const { rejects } = require("assert");

const promise = new Promise((resolve, reject) =>{
    //setTimeout(() => resolve('End'), 2000)
    setTimeout(() => reject('Lascou'), 2000)
})

console.log('Begin')

//promise.then((data) => { console.log(data)})
//promise.then(console.log)
promise.then((data) => { console.log(data)}).catch((err)=> console.log('oops', err))