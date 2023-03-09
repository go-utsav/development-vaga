var express = require('express');
var router = express.Router();
const { createtemplate, deletetemp } = require("./../controller/whatapp_template_controller");

/* GET users listing. */
router.get('/wp/template/create', createtemplate);
router.get('/wp/template/delete/:id', deletetemp);

module.exports = router;
