
const opciones = {
    crear:{
        descripcion:{
            demand: true,
            alias:'d',
            desc:'Descripcionde la tarea'
        }
    },
      borrar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcionde la tarea a borrar'
        }
    },actualizar:{
        descripcion:{
            demand: true,
            alias:'d',
            desc: 'Descripcionde la tarea'
        },completado:{
            alias:'c',
            desc: 'Describe el estatus de la tarea',
            default:true
        }
    }
}
//console.log(opciones.actualizar);
const argv = require("yargs")
.command('crear','Crea una tarea por hacer', opciones.crear)
//.command('listar', 'Muestra una lista de tareas por hacer')
.command('actualizar','Actualiza una tarea por hacer', opciones.actualizar)
.command('borrar', 'Borra una tarea por hacer', opciones.borrar)
.help()
.argv;

module.exports = {
    argv
};
