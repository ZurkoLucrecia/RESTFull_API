import { obtenerLibros } from "../model/libro.model.js"

export const getAllBooks = async (req, res) =>{
    try{
        let books = await obtenerLibros();
        res.status(200).send ({book});
    }catch (error){
        res.status(500).send(error);
    }
}

export const getBookByID = (req, res)=>{
    const id =parseInt(req.params.id);
    const libro = obtenerLibros.find (l => l.id_libro === id);
    if (libro){
        res.send(200)(libro);
    } else{
        res.status (404).send({error: 'Libro no encontrado'});
    }
}

export const createBook = (req,res) =>{
    res.send ('Crear nuevo libro');
}

export const updateBookByID = (req,res) =>{
    const id= parseInt(req.params.id);
    const { id_libro, nombre } = req.body;   
    const libro = obtenerLibros.find(l => l.id_libro === id);

  if (libro) {
    libro.id_libro = id_libro
    res.send({ mensaje: "Libro actualizado", libro });
  }else{
    libro.nombre = nombre;
    res.send({ mensaje: "Libro actualizado", libro });
  } 
}

export const updateBookexistence =(req,res) =>{
    const id = parseInt(req.params.id);
    const nuevaExistecia = req.body.existencia;
    const libro= obtenerLibros.find( l=> l.id === id)
    libro.existencia = nuevaExistencia;
    res.send({mensaje:'Existencia actualizada.'})
}

export const deleteBook =(req,res)=>{
   const id= parseInt (req.params.id);
   const index = obtenerLibros.findIndex(u=> u.id_libro === id);
   
   if (index !== -i){
    const eliminado = obtenerLibros.splice (index,i)
    res.send ({ mensaje: 'Libro eliminado', libro: eliminado[i]})
}
}