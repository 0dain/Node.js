const express=require('express');

const router=express.Router();//라우터 사용

router.get('/', (req, res)=>{
    res.send('index router!');
});

module.exports = router;//app.js에서 활용할 수 있도록 router 내보내기