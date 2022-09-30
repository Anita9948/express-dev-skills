var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills');


router.get("/", skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
