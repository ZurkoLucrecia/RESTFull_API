import { Router } from "express";
import {} from "../controller/resenia.controller.js";
router = Router();

router.get("/resenias", getAllResenias);
router.get("/resenias/id", getReseniaByID);
router.get("/resenia/libro/:id_libro", getReseniaByBookID);
router.post("/resenias", createResenia);
router.put("/resenias/:id", updateReseniaByID);
router.delete ("/resenias/:id", deleteResenia);
