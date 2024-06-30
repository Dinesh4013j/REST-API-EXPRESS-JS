const express=require('express')
const router=express.Router()
const path=require('path')




router.get('^/$|/index(.html)?',(req,res)=>{
    res.send('hi makkalae');
})
router.get('/newpage(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','newpage.html'))
})
router.get('/oldpage(.html)?',(req,res)=>{
    res.redirect(301,'newpage.html')
})
router.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'..','views','404.html'))
})
module.exports=router