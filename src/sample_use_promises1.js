//função file system
const fs = require('fs')
//função caminho relativos
const path = require('path')
const basePath = './assets/'

function readFileAsync(path,options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options,(err, data) =>{
            if (err) return reject(err)
            return resolve(data)
        })
    })
}

console.log('Begin')
readFileAsync(path.resolve(basePath,'UsuariosCRM.csv'),{encoding:'utf-8'})
.then((data) => console.log(data))
.catch((err) => console.log(err))
console.log('End')