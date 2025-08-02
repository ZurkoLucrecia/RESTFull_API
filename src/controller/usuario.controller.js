import { obtenerUsuarios } from "../model/usuario.model.js"

export const getAllUsers = async(req, res)=>{
    try{
        let users = await obtenerUsuarios();
        res.status(200).send ({users});
    }catch(error){
        res.status(500).send(error);
    }
}

export const getUserByID =   (req,res) =>{ 
    let id = parseInt(req.params.id);
    let usuario = obtenerUsuarios.find(u => u.id_usuario === id);
    if (usuario){
        res.send(200)(usuario);
    } else {
        res.status(404).send({ error: 'Usuario no encontrado'});
    }
}

export const createUser = (req, res) => {
    res.status(201).send("Crear un nuevo usuario");
}

export const updateUserByID = (req,res) =>{
    const id= parseInt(req.params.id);
    const {nombre, id_usuario} = req.body; 
    const usuario = obtenerUsuarios.find(u => u.id_usuario === id);

  if (usuario) {
    usuario.nombre = nombre;
    res.send({ mensaje: "Usuario actualizado", usuario });
  } else {
    id_usuario = id_usuario
    res.send({ mensaje: "Usuario actualizado", usuario });
  }
};

export const deleteUser = (req, res) =>{
    const id= parseInt (req.params.id);
    const usuario= obtenerUsuarios.find(u=> u.id_usuario === id);
    
    if (usuario){
    const eliminado = obtenerUsuarios.splice (usuarios,1)
    res.send ({ mensaje: 'Usuario eliminado', usuario: eliminado[1]})
}  
}