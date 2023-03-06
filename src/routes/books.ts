import express from "express";
import { bookName } from "../controllers/libraryController";
import { chapterScrapper } from "../controllers/cheerioTutorial";

const router = express.Router();

router.get('/chapters', chapterScrapper)
router.get('/:name', bookName)

export default router;
