const Hotel=require('../model/hotel.model');

const singlehotelHandler=async(req,res)=>{
    try{
     const {id}=req.params;//{id:23456wertyuiopiuyt}
     const hotel=await Hotel.findById(id);
     res.json(hotel);
    }catch(err){
      res.status(404).json({message:"No hotel found"});
    }
}
module.exports=singlehotelHandler;