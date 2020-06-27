//função file system
const fs = require('fs')
//função caminho relativos
const path = require('path')
const basePath = './assets/'

console.log('Begin')

//const content = fs.readFileSync(path.resolve(basePath,'UsuariosCRM.csv'))
//console.log(content.toString())

//const files = fs.readdirSync(path.resolve(basePath))

//const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

//for (const sentence of sentences){
//    const text = fs.readFileSync(path.resolve(basePath,sentence))
//    console.log(text.toString())
//}


//callback - chamada de uma função passada para 


//fs.readFile(path.resolve(basePath,'UsuariosCRM.csv'),{encoding:'utf-8'},(err,data)=>{
//    if (err) throw err
//
//    console.log(data)
//})

//função de callback sample
function cb (err, data){
    if (err) throw err
    console.log(data)
}
//fs.readFile(path.resolve(basePath,'UsuariosCRM.csv'),{encoding:'utf-8'},cb)



const files = fs.readdirSync(path.resolve(basePath))
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))


for (const file of sentences){
    fs.readFile(path.resolve(basePath,file),{encoding:'utf-8'},cb)
}


console.log('End')