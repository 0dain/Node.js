const express=require('express');

const app=express();//app생성

//응답
//get: get요청 받는다
app.get('/', (req, res)=>{//root로 get 요청 시 어떻게 처리할 건지
    res.send('Hello World!'); //작성한 텍스트 응답
});

//서버열기 위해 포트번호 부여
app.listen(8888, ()=>{
    //8888포트로 오는 요청 기다림
    console.log('8888번 포트에서 서버 연결 대기중');
});