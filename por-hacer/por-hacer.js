const fs = require('fs');
let listadoPorHacer =[];

const guardardb = ()=>{
    let data =JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, err =>{
        if(err){  
            throw new Error('No se pudo guardar el archivo', err);
        }
        console.log("archivo creado");
    });
}

const cargardb =()=>{
    try {    
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer =[];
    }
}
const getListado = ()=>{
    cargardb();
    return listadoPorHacer;
}
const actualizar = (descripcion,completado=true)=>{
    cargardb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //console.log(index);
        if (index >= 0) {
            listadoPorHacer[index].completado= completado;
            guardardb();
            return true;       
        }else{
            return false;
        }
  

}
const crear = (descripcion)=>{

    cargardb();

    let porHacer={
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer);
    guardardb();
    return porHacer;
}
const borrar = (descripcion) =>{
    cargardb();
    let nuevoListado = listadoPorHacer.filter(tarea=>tarea.descripcion !== descripcion);
    if(nuevoListado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer =nuevoListado;
        guardardb();
        return true;
    }
}
module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
  //cargardb,
};