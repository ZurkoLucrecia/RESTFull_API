import {Router} from "express";
import {getAllBooks,getBookByID, createBook, updateBookByID, updateBookexistence,deleteBook } from "../controller/libro.controller";
const router=Router();


router.get("/libros", getAllBooks);
router.get("/libros/:id", getBookByID);
router.post ("libros", createBook);
router.put("/libros/:id", updateBookByID);
router.put("/libros/:id", updateBookexistence);
router.delete("/libros/:id",deleteBook);

export default router;