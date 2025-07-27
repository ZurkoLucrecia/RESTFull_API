
import express from 'express';
const app = express ();

app.use (express.text());
app.use (express.json());

app.use (express.urlencoded({ extended: true}));

//Usuarios
const usuarios = [
  { id_usuario: 1, nombre: "Juan" },
  { id_usuario: 2, nombre: "Ana" }
];

app.get ('/usuarios', (req,res) =>{
    res.send (usuarios);
})

app.get ('/usuarios/:id', (req,res) =>{
   const id = parseInt(req.params.id);
   const usuario = usuarios.find(u => u.id_usuario === id);
    if (usuario){
        res.send(usuario);
    } else {
        res.status(404).send({ error: 'Usuario no encontrado'});
    }
});

app.post ('/usuarios', (req,res) =>{
    res.send ('Crear nuevo usuario');
});

app.put ('/usuarios/:id', (req,res) =>{
    const id= parseInt(req.params.id);
    const { nombre, id_usuario } = req.body;   
    
    const usuario = usuarios.find(u => u.id_usuario === id);

  if (usuario) {
    usuario.nombre = nombre;
    res.send({ mensaje: "Usuario actualizado", usuario });
  } else {
    id_usuario = id_usuario
    res.send({ mensaje: "Usuario actualizado", usuario });
  }
});

app.delete ('/usuarios/:id', (req,res)=>{
   const id= parseInt (req.params.id);
   const usuario= usuarios.find(u=> u.id_usuario === id);
   
   if (usuario){
    const eliminado = usuarios.splice (usuarios,1)
    res.send ({ mensaje: 'Usuario eliminado', usuario: eliminado[1]})
}
})


//Libros
const Libros = [
      { id_libro: 1, nombre: "Cien Años de Soledad", existencia: 3 },
      { id_libro: 2, nombre: "Orgullo y Perjuicio", existencia: 3 }
];

app.get ('/libros/', (req, res) =>{
    res.send(Libros);
})

app.get ('/libros/:id', (req, res)=>{
    const id =parseInt(req.params.id);
    const libro = Libros.find (l => l.id_libro === id);
    if (libro){
        res.send(libro);
    } else{
        res.status (404).send({error: 'Libro no encontrado'});
    }
})

app.post ('/libros', (req,res) =>{
    res.send ('Crear nuevo libro');
});

app.put ('/libros/:id', (req,res) =>{
    const id= parseInt(req.params.id);
    const { id_libro, nombre } = req.body;   
    const libro = Libros.find(u => u.id_libro === id);

  if (libro) {
    libro.id_libro = id_libro
    res.send({ mensaje: "Libro actualizado", libro });
  }else{
    libro.nombre = nombre;
    res.send({ mensaje: "Libro actualizado", libro });
  } 
});

app.put ('/libros/:id/existencia',(req,res) =>{
    const id = parseInt(req.params.id);
    const nuevaExistecia = req.body.existencia;
    const libro= Libros.find( l=> l.id === id)
    libro.existencia = nuevaExistencia;
    res.send({mensaje:'Existencia actualizada.'})
})

app.delete ('/libros/:id', (req,res)=>{
   const id= parseInt (req.params.id);
   const index= libros.findIndex(u=> u.id_libro === id);
   
   if (index !== -i){
    const eliminado = Libro.splice (index,i)
    res.send ({ mensaje: 'Libro eliminado', libro: eliminado[i]})
}
});


//Prestamos
const prestamos = [
      { id_prestamo: 1, usuario: 1, id_libro: 23, fecha_entrega: '28-07-2024', fecha_devolucion: '10-08-2024' },
      { id_prestamo: 2, usuario: 2, id_libro: 34, fecha_entrega: '27-07-2024', fecha_devolucion: '10-08-2024' }
];

app.get (' /prestamos', (req,res)=>{
    res.send(prestamos);
});

app.get('/prestamos/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const prestamo =prestamos.find(p=> p.id.prestamo === id);

    if (prestamo){ 
        res.send(prestamo);
    } else{
        res.status (404).send({error: 'Préstamo no encontrado'});
    }
})

app.post('/prestamos', (req,res) =>{
    res.send ('Crear nuevo préstamo');
});

app.put('/prestamos/:id', (req,res)=>{
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
  
});

app.delete ('/prestamos/:id', (req,res)=>{
  const index = prestamos.findIndex(p => p.id_prestamo === id);
if (index !== -1) {
  const eliminado = prestamos.splice(index, 1);
  res.send({ mensaje: "Préstamo eliminado", prestamo: eliminado[0] });
}
});

//Reseñas
const Resenias = [
      { id_resenia: 1, nombre: "Cien Años de Soledad" },
      { id_resenia: 2, nombre: "Orgullo y Perjuicio" }
];

app.get ('/resenias', (req,res)=>{
res.send (Resenias);
})

app.get('/resenias/:id', (req,res)=>{
    const id= parseInt(req.params.id);
    const  resenia =Resenias.find(r=> r.id.resenia === id);

    if (resenia){ 
        res.send(resenia);
    } else{
        res.status (404).send({error: 'Reseña no encontrado'});
    }
})

app.get('/resenias/libro/:id_libro', (req,res)=>{
    const idLibro = parseInt(req.params.id_libro);
    const resenia =Resenias.find(p=> p.nombre === nombre);

    if (resenia){ 
        res.send(resenia);
    } else{
        res.status (404).send({error: 'Reseña no encontrada'});
    }
})

app.put('/resenias/:id', (req,res)=>{
    const id= parseInt(req.params.id);
    const { id_resenia, nombre } = req.body;   
    const resenia = Resenias.find(u => u.id_resenia === id);
    
    if (id_resenia) resenia.id_resenia = id_resenia;
    if (nombre) resenia.nombre = nombre;
    res.send({ mensaje: "Reseña actualizado", resenia });

    if (!prestamo) {
    return res.status(404).send({ error: "Préstamo no encontrado" });
  }
  
});

app.delete ('/resenias/:id', (req,res)=>{
   const id= parseInt (req.params.id);
   const resenia= Resenias.find(u=> u.id_resenia === id);
   
   if (resenia){
    const eliminado = resenia.splice (resenia,i)
    res.send ({ mensaje: 'Reseña eliminado', resenia: eliminado[i]})

}});


//Lógicas específicas

app.get('/libros/disponibles', (req, res) => {
  const disponibles = Libros.filter(libro => libro.existencia > 0);
  res.send(disponibles);
});

app.get('/prestamos/usuario/:id_usuario', (req, res) => {
  const id = parseInt(req.params.id_usuario);
  const resultado = prestamos.filter(p => p.id_usuario === id);

  if (resultado.length > 0) {
    res.send(resultado);
  } else {
    res.status(404).send({ error: 'No se encontraron préstamos para este usuario' });
  }
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
  const id = parseInt(req.params.id_libro);
  const resultado = prestamos.filter(p => p.id_libro === id);

  if (resultado.length > 0) {
    res.send(resultado);
  } else {
    res.status(404).send({ error: 'No se encontraron préstamos para ese libro' });
  }
});



app.listen(8080, () => {
    console.log ("Servidor escuchando en http://localhost:8080");
});