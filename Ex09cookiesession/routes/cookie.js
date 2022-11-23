const express=require('express');
const router=express.Router();

//쿠키 설정 => 클라이언트 저장
router.get('/setcookie', (req, res)=>{
    let nickname='dain';

    // res.cookie('key', value, {유효기간})
    res.cookie('nickname', nickname, {
        maxAge: 100000000, //밀리초단위(만료시간)
    });

    res.cookie('dinner', '볶음밥', {
        expires: new Date(Date.now()+60*60*24*1000*2), //오늘 날짜로부터 밀리초로 이틀동안 살아있게 하는 거
    });

    res.send('쿠키생성');

});

//쿠키 확인하기
router.get('/getcookies', (req, res)=>{
    console.log(req.cookies);
    console.log(req.cookies.dinner);//디너만 확인하고 싶다면 이렇게 하면 됨
    res.send(req.cookies);
});

//쿠키 삭제
router.get('/deletecookie', (req, res)=>{
    //서버가 삭제한 다음에 클라이언트에 보내야 함
    // res.clearCookie('삭제하고 싶은 쿠키의 키 값');
    res.clearCookie('dinner');
    res.send('쿠키삭제');
});

module.exports=router;