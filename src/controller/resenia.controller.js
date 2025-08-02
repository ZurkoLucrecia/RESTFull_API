import { obtenerResenia } from "../model/resenia.model.js";

export const getAllResenias = async (req, res)=>{
    try{
        let resinias = await obtenerResenia();
        res.status(200).send ({users});
    }catch(error){
        res.status(500).send(error);
    }
}

export const getReseniaByID= async (req, res)=>{
    const id= parseInt(req.params.id);
    const  resenia =obtenerResenia.find(r=> r.id.resenia === id);

    if (resenia){ 
        res.send(resenia);
    } else{
        res.status (404).send({error: 'Reseña no encontrada'});
    }
}

export const getReseniaByBookID= async (req, res)=>{
    const idLibro = parseInt(req.params.id_libro);
    const resenia =obtenerResenia.find(p=> p.nombre === nombre);

    if (resenia){ 
        res.send(resenia);
    } else{
        res.status (404).send({error: 'Reseña no encontrada'});
    }
}

export const createResenia= async (req, res)=>{
  res.send ('Crear nuevo Reseña');
}

export const updateReseniaByID= async (req, res)=>{
    const id= parseInt(req.params.id);
    const { id_resenia, nombre } = req.body;   
    const resenia = ObtenerResenia.find(u => u.id_resenia === id);
    
    if (id_resenia) resenia.id_resenia = id_resenia;
    if (nombre) resenia.nombre = nombre;
    res.send(200)({ mensaje: "Reseña actualizado", resenia });

    if (!prestamo) {
    return res.status(404).send({ error: "Préstamo no encontrado" });
}
}

export const deleteResenia= async (req, res)=>{
  const index = prestamos.findIndex(p => p.id_prestamo === id);
if (index !== -i) {
  const eliminado = prestamos.splice(index, i);
  res.send({ mensaje: "Préstamo eliminado", prestamo: eliminado[i]});
}
};