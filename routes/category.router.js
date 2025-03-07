const express=require('express');
const CategoryHandler = require('../controllers/categoryController');
const router=express.Router();


router.route("/")
.get(CategoryHandler)

module.exports=router;