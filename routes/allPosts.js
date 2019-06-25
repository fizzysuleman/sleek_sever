const {Post}=require('../models/postSchema')
const express = require('express');
const auth=require('../middleware/auth')
const router = express.Router();


//getting the token details by the id and return the response to the server
router.get('/',auth,async (req, res) => {

  var regex =new RegExp(req.query.category,'i')

  let sellerPost = await Post.find(
    {'$or':
  [{category:regex}]}
  )
  

  sellerPost=sellerPost.filter((item)=>{
    return (item.deleted|| item.blocked) !== true 
  })
  //if (!sellerPost) return res.status(404).send('Account Info not found');

  res.send(sellerPost);

  
})



module.exports = router;