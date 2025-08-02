import {pool} from " ../config/db.js";

export const obtenerPrestamo = async () =>{
    try {
        let sentence = "SELECT * FROM prestamo"
        const [rows] = await pool.query(sentence)
        return rows;
    } catch (error) {
        console.log (error)
        throw new Error(error.message);
    }
}