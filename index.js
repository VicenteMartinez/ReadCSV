const fs=require('fs');

fs.readFile('./archivo1.txt', (error,datos) => {
  if (error)
    console.log(error);
  else
  var arr = datos.toString().replace(/\n/g, ',').split(',');;
    console.log(arr);
});

console.log('última línea del programa');
