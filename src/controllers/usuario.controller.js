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
    //manejo de errores con try y catch
    try{
    let usuarios = await usuarioModel.find();
    return res.send(usuarios);
    }catch(error){
        return res.json({error: "error al mostrar los datos" + error});
    }

}

//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
    //manejo de errores con try y catch

    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    }catch(error){
        //Para que me muestre un mensaje que me indique cuál es el error
        return res.json({error: "error al crear el usuario, holi", message:error.message});
    }

}

//LOGICA PARA MODIFICAR USUARIOS
export const putUsuario = async (req, res) => {  
    return res.send("funciona la peticion PUT");
}   

//LOGICA PARA CREAR USUARIOS
export const deleteUsuario = async (req, res)  => {
    return res.send("funciona la peticion DELETE");
}