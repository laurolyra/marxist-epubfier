const { Router } = require('express');
const { wikisourceController } = require('../controllers/');

const router = Router();

router.get('/:name', wikisourceController.bookName)

module.exports = router;