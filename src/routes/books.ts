const { Router } = require('express');
const controllers = require('../controllers/');

const router = Router();

router.get('/:name', controllers.wikisourceController.bookName)

module.exports = router;