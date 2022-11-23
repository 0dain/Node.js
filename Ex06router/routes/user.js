const express=require('express');

const router=express.Router();//라우터 호출

router.get('/hello', (req, res)=>{
    res.send('user router!');
});

module.exports=router;//app.js에서 사용할 수 있도록 내보내기