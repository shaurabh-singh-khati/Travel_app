const express=require('express');
const verifyUser=require('../middleware/verifyUser');
const wishListController=require("../controllers/wishlistController");
 const { createWishlistHandler,deleteWishlistHandler,getWishlistHandler} =wishListController;
const router=express.Router();

router.route("/")
.post(verifyUser,createWishlistHandler)

router.route("/:id")
.delete(verifyUser,deleteWishlistHandler)

router.route("/")
.get(verifyUser,getWishlistHandler)

module.exports=router;