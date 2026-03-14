const express = require("express")
const router = express.Router()

router.get("/products",(req,res)=>{

res.json([
{ name:"Modern Sofa",price:15000 },
{ name:"Red Dress",price:1200 }
])

})

module.exports = router
