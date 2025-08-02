import {pool} from "../config/db.js";

export const obtenerResenia = async () =>{
    try {
             let sentence = "SELECT * FROM libro"
        const [rows] = await pool.query(sentence)
        return rows;
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }   
}