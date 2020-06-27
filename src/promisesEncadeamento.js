//Toda promises retorna outra promises
//43 min
//Todo metodo then retorna outra promises

const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

//coinFlip
//.then((data)=> console.log(data, '1'))
//.then(() => console.log('End1')) //não executa quando ocorre a exceção no primeiro then
//.catch((err) => console.log(err,'Erro 1')) 


coinFlip
.then((data)=> console.log(data, '1'))
.catch((err) => console.log(err,'Erro 1')) // Cada catch trata a exceção de um then
.then(() => console.log('End1'))
