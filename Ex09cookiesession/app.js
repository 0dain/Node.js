const express=require('express');
const app=express();//app생성
const cookieRouter=require('./routes/cookie');
const cookieParser=require('cookie-parser');

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);

app.use(cookieParser()); //쿠키값 확인 시 필요
app.use('/c', cookieRouter);

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

