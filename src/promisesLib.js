//função file system
const fs = require('fs')
//função caminho relativos
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'
//promisify não funciona com todas as funções
//usando promisify passando ponteiro da função readFile

const readFileAsync = promisify(fs.readFile)

console.log('Begin')
readFileAsync(path.resolve(basePath,'UsuariosCRM.csv'),{encoding:'utf-8'})
.then((data) => console.log(data))
.catch((err) => console.log(err))
console.log('End')