const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');//post요청 시 body 파싱을 위해 추가



//bodyParser 미들웨어 추가
router.use(bodyParser.urlencoded({extended:true}));//바디파싱해주기 위한 작업

//특정 요청 시
//index.html 응답 + 특정 데이터(html에서 출력될 수 있도록)

router.get('/', (req, res)=>{
    res.render('loginform');
});

router.post('/login', (req, res)=>{
    let id=req.body.id;
    let pw=req.body.pw;

    if(id==='smhrd'&&pw==='12345'){
        res.render('loginSuccess', {ID: id});
    }else{
        res.render('loginFail', {Fail: '로그인 실패!'})
    }
});

module.exports=router;