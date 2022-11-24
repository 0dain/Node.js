const express=require('express');
const router=express.Router();//라우터 가져오기

//세션 생성
router.get('/setsession', (req, res)=>{

    // req.session.nickname 닉네임이라는 키값을 가진 세션을 만들고 싶다
    // req.session.nickname='닉네임' 닉네임이라는 키값에 넣을 데이터 값 닉네임을 넣겠다

    req.session.nickname='닉네임';
    req.session.today='today';
    res.send('세션 생성 완료!');

});

//세션에 저장된 값을 응답하기
router.get('/getsession', (req, res)=>{
    res.send('닉네임: '+req.session.nickname);
});

//세션 삭제
router.get('/deletesession', (req, res)=>{
    req.session.destroy();//세션 전체 삭제
    //원하는 세션만 지우는 기능은 없음
    // req.session.today=''; 하나만 삭제 하고 싶을 땐 지우고자 하는 세션에 빈 값을 넣어줘야 함
    res.send('세션 삭제');
});

module.exports=router;