import express from "express";
import { bookName } from "../controllers/libraryController";

const router = express.Router();

router.get('/:name', bookName)

export default router;
