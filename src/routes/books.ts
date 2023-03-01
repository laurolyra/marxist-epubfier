import express from "express";
import { bookName } from "../controllers/libraryController";
import { pokeTest } from "../controllers/cheerioTutorial";

const router = express.Router();

router.get('/pokemon', pokeTest)
router.get('/:name', bookName)

export default router;
