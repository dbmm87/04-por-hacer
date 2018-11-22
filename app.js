
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require("colors");
//console.log(argv);
let comando  = argv._[0];

switch(comando){
    case 'crear':
       let tarea = porHacer.crear(argv.descripcion);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        //console.log(listado);
        for(let tarea of listado ){
            console.log('======== Por Hacer =========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('======================='.green);
        }
    break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizar);
    break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
    break;
    default:
    console.log("comando no es reconocido");
    
}