import {Router} from "express";
import {getAllUsers, getUserByID,createUser, updateUserByID, deleteUser} from "../controller/prestamo.controller.js";
const router=Router();


router.get("/prestamo", getAllPrestamos);
router.get("/prestamo/:id", getPrestamoByID);
router.post ("prestamo", createPrestamo);
router.put("/prestamo/:id", updatePrestamoByID);
router.delete("/prestamo/:id",deletePrestamo);

export default router;