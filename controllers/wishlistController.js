const Wishlist=require('../model/wishlist.model');

const createWishlistHandler=async(req,res)=>{
    const newWishlist=new Wishlist(req.body);
    try{
        const savedWishlistHandler=await newWishlist.save(); 
        res.status(201).json(savedWishlist);
    }catch(err){
        res.status(500).json({message:"failed to create wishlist"});
    }
}


const deleteWishlistHandler=async(req,res)=>{
    try{
            await Wishlist.findByIdAndDelete(req.params.id);
            res.json({message:"Hotel deleted from wishlist"})
    }catch(err){
          res.status(500).json({message:"could not delete hotel from wishlist"})
    }
}


const getWishlistHandler=async(req,res)=>{
    try{
            const wishList=await Wishlist.find({});
            wishList?res.json(wishList): res.json({message:"No items found in wishlist"})
    }catch(err){
          res.status(500).json(err)
    }
}
module.exports={ createWishlistHandler,deleteWishlistHandler,getWishlistHandler};