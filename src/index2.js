//função file system
const fs = require('fs')
//função caminho relativos
const path = require('path')
const basePath = './assets/'

//função de callback sample
function cb (err, data){
    if (err) throw err
    console.log(data)
}

console.log('Begin')

fs.readFile(path.resolve(basePath,'us1.txt'),{encoding:'utf-8'},(err,data)=>{
    cb(err,data)
    fs.readFile(path.resolve(basePath,'us2.txt'),{encoding:'utf-8'},(err,data)=>{
        cb(err,data)
        fs.readFile(path.resolve(basePath,'us3.txt'),{encoding:'utf-8'},(err,data)=>{
            cb(err,data)
            fs.readFile(path.resolve(basePath,'us4.txt'),{encoding:'utf-8'},(err,data)=>{
                cb(err,data)  
            })
        })
    })
})

console.log('End')