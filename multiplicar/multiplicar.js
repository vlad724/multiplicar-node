const colors = require('colors');
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    console.log('============================'.green);
    console.log(`======tabla de ${base}======`.green);
    console.log('============================'.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ` + i * base);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor: ${base} no es un numero`);
            return
        }
        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ` + i * base + `\n`);

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}-al-${limite}.txt ha sido creado`);


        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}