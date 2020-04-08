//requireds: hay 3 tipos
//const fs = require('fs'); //fs ya es una libreria ya definida
//const fs = require('express'); no existe en la documentacion de node, se instala
//const fs = require('./(direccion)'); los que nosotros creamos


const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        break;
}

/* let base = '5'; */



/* console.log(argv.base); */



/* let parametro = argv[2];

let base = parametro.split('=')[1]; */



/* let data1 = '';

for (let i = 1; i <= 10; i++) {

    data1 += (`${base} * ${i} = ` + i * base + `\n`);

}


fs.writeFile(`tablas/tabla-${base}.txt`, data1, (err) => {
    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt ha sido creado`);
}); */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivocreado: ${archivo}`))
    .catch(e => console.log(e)); */