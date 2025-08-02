import { obtenerPrestamo } from "../model/prestamo.model.js"

export const getAllPrestamos = async (req,res)=>{
try{
    let prestamos = await obtenerPrestamo;
    res.status(200).send ({prestamos});
} catch (error){
    res.status(500).send (error);
}}

export const getPrestamoByID = async (req,res)=>{
    let id= parseInt(req.params.id);
    let prestamo =obtenerPrestamo.find(p=> p.id.prestamo === id);
    if (prestamo) { 
        res.send(prestamo);
    } else{
        res.status (404).send({error: 'Préstamo no encontrado'});
    }
}

export const createPrestamo = async (req,res) =>{
    res.send ('Crear nuevo préstamo');
};

export const updatePrestamoByID = async (req,res)=>{
    const id= parseInt(req.params.id);
    const { id_prestamo, usuario, id_libro, fecha_entrega, fecha_devolucion } = req.body;   
    const prestamo = prestamos.find(p => p.id_prestamo  === id);
    
    if (id_prestamo) prestamo.id_prestamo = id_prestamo;
    if (id_usuario) prestamo.usuario = usuario;
    if (id_libro) prestamo.id_libro = id_libro;
    if (fecha_entrega) prestamo.fecha_entrega = fecha_entrega;
    if (fecha_devolucion) prestamo.fecha_devolucion = fecha_devolucion;
    res.send({ mensaje: "Préstamo actualizado", prestamo });

    if (!prestamo) {
    return res.status(404).send({ error: "Préstamo no encontrado" });
  }
  }

export const deletePrestamo = async (req,res)=>{
  const index = obtenerPrestamo.findIndex(p => p.id_prestamo === id);
if (index !== -i) {
  const eliminado = obtenerPrestamo.splice(index, i);
  res.send({ mensaje: "Préstamo eliminado", prestamo: eliminado[i] });
}};
