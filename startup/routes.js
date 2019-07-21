const error=require('../middleware/error')
const express=require('express')
const buyers=require('../routes/registerBuyer')
const sellers=require('../routes/registerSeller')
const registerBuyer1=require('../routes/registerBuyers1')
const registerSeller1=require('../routes/registerSeller1')
const loginBuyerAuth=require('../routes/loginBuyerAuth')
const loginSellerAuth=require('../routes/loginSellerAuth')
const sellerProfile=require('../routes/sellerProfile')
const buyerProfile=require('../routes/buyerProfile')
const productImages=require('../routes/productImages')
const profileImage=require('../routes/profileImage')
const addNewPost=require('../routes/addNewPost')
const sellerItems=require('../routes/sellerItems')
const allPosts=require('../routes/allPosts')
const addToWishList=require('../routes/wishListAdd')
const removeFromWishList=require('../routes/removeFromWishList')
const addToCart=require('../routes/addToCart')
const removeFromCart=require('../routes/removeFromCart')
const postAdded=require('../routes/postAdded')
const topFancied=require('../routes/topFancied')
const search=require('../routes/search')
const cartItems=require('../routes/cartItems')
const wishListItems=require('../routes/wishListItems')
const itemPost=require('../routes/itemPost')
const ratingPost=require('../routes/ratingPost')
const averageRating=require('../routes/averageRating')
const deletePost=require('../routes/deletePost')
const editPost=require('../routes/editPost')
const updateProfile=require('../routes/updateProfile')
const tips=require('../routes/tips')
const changePassword=require('../routes/changePassword')
const forgotPassword=require('../routes/forgotPassword')
const forgotPasswordToken=require('../routes/forgotPasswordToken')
const changeForgottenPassword=require('../routes/changeForgottenPassword')
const contactMade=require('../routes/contactMade')
const verificationBuyerToken=require('../routes/verificationBuyerToken')
const verificationSellerToken=require('../routes/verificationSellerToken')




module.exports=function(app){
    app.use(express.json())

//     app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
// });

app.use('/api/registerBuyer',buyers)
app.use('/api/registerSeller',sellers)
app.use('/api/registerBuyer1',registerBuyer1)
app.use('/api/registerSeller1',registerSeller1)
app.use('/api/verificationBuyerToken',verificationBuyerToken)
app.use('/api/verificationSellerToken',verificationSellerToken)
app.use('/api/loginBuyer',loginBuyerAuth)
app.use('/api/loginSeller',loginSellerAuth)
app.use('/api/sellerProfile',sellerProfile)
app.use('/api/buyerProfile',buyerProfile)
app.use('/api/uploadProductImages',productImages)
app.use('/api/addNewPost',addNewPost)
app.use('/api/sellerItems',sellerItems)
app.use('/api/allPosts',allPosts)
app.use('/api/addToWishList',addToWishList)
app.use('/api/removeFromWishList',removeFromWishList)
app.use('/api/addToCart',addToCart)
app.use('/api/removeFromCart',removeFromCart)
app.use('/api/postAdded',postAdded)
app.use('/api/topFancied',topFancied)
app.use('/api/search',search)
app.use('/api/cartItems',cartItems)
app.use('/api/wishListItems',wishListItems)
app.use('/api/itemPost',itemPost)
app.use('/api/ratingPost',ratingPost)
app.use('/api/averageRating',averageRating)
app.use('/api/deletePost',deletePost)
app.use('/api/editPost',editPost)
app.use('/api/updateProfile',updateProfile)
app.use('/api/uploadProfileImage',profileImage)
app.use('/api/tips',tips)
app.use('/api/changePassword',changePassword)
app.use('/api/forgotPassword',forgotPassword)
app.use('/api/forgotPasswordToken',forgotPasswordToken)
app.use('/api/changeForgottenPassword',changeForgottenPassword)
app.use('/api/contactMade',contactMade)


//middleware for handling error
app.use(error)

}