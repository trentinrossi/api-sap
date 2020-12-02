const express = require('express');
const router = express.Router();
const sapController = require('../controller/sapController');

router.post('/:rfc', sapController.callRfc);

module.exports = router;
