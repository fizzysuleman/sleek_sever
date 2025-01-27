const { WishList } = require('../models/wishListSchema')
const { Post } = require('../models/postSchema')
const express = require('express');
const mongoose = require('mongoose')
const auth = require('../middleware/auth')
const router = express.Router();


//getting the token details by the id and return the response to the server
router.get('/:id', auth, async (req, res) => {
   try{
   let user = await WishList.findOne({ userId: req.params.id })


   if (user) {
      let userWishListIds = user.postIds
      let userWishList = await Post.find(
         {
            _id:
               userWishListIds.map((item, index) => {
                  return mongoose.Types.ObjectId(item)

               })

         }
      )
      userWishList = userWishList.filter((item) => {
         return (item.deleted || item.blocked) !== true
      })
      res.send(userWishList)
   }
   else {
      res.send([])
   }
}
catch (ex) {
   res.status(500).send('Something failed from the server.')
}
});




module.exports = router;