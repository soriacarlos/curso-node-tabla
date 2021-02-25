const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for(let i = 1; i <= hasta; i++ ){
      consola += `${base}`.yellow +` x `.cyan +`${i}`.gray + ` = `.cyan +`${i*base}\n`.green;
      salida += `${base} x ${i} = ${i*base}\n`;
    }

    if(listar){
      console.log('=================================='.rainbow);
      console.log(`           Tabla del: ${base} `.cyan);
      console.log('=================================='.rainbow);
      console.log(consola);
    }

    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.bgGreen;

  } catch (error) {
    throw error;
  }
  
};

module.exports = {
  crearArchivo
}