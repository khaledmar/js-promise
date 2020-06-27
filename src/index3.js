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

fs.readdir(path.resolve(basePath),(err, files) =>{
    if (err) throw err
    files
    .filter((file) => /s[1-4].txt/gi.test(file)) //filter the file
    .forEach((setenceFile) =>{
        fs.readFile(path.resolve(basePath, setenceFile),{encoding:'utf-8'},cb) //Will print unordered
    })
})


console.log('End')