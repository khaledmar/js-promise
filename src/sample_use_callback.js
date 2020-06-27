//Exemplo bom de uso de callbacks

//função file system
const fs = require('fs')
//função caminho relativos
const path = require('path')
const basePath = './assets/'

//função de callback sample
function cb (err, data,index, max){
    if (err) throw err
    console.log(data)
    return start(index + 1, max)
}

console.log('Begin')

start(1,5)

//console.log('End')

function start (index, max) {
    if (index > max) return console.log('End')
    fs.readFile(path.resolve(basePath,`us${index}.txt`),{encoding:'utf-8'},(err,data) => cb(err,data, index, max))
}