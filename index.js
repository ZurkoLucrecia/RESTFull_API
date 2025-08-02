import express from "express";
import libroRouter from "";
import prestamoRouter from "";
import usuarioRouter from "";

const app = express ();

app.use(express. text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(libroRouter);
app.use(prestamoRouter);
app.use(usuarioRouter);


app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
