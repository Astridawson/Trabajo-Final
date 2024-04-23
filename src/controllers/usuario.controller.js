//IMPORTAMOS DEPENDENCIAS

import usuarioModel from "../models/usuario.model.js";


/* CREAR LOGICA DE PETICIONES
//1.  GET = MOSTRAR MUESTRA MIS USUARIOS
//2.  POST = CREAR CREA UN USUARIO
//3.  PUT= MODIFICAR MODIFICA USUARIO
//4.  DELETE = ELIMINAR ELIMINA USUARIO

*/
//PRUEBA INICIAL
//LOGICA PARA MOSTRAR USUARIOS

export const getUsuario = async(req, res) => {
    return res.send("funciona la peticion GET");

}

//LOGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) =>{
    return res.send("funciona la peticion POST");
}

//LOGICA PARA MODIFICAR USUARIOS
export const putUsuario = async (req, res) => {  
    return res.send("funciona la peticion PUT");
}   

//LOGICA PARA CREAR USUARIOS
export const deleteUsuario = async (req, res)  => {
    return res.send("funciona la peticion DELETE");
}