const express=require('express');
const app=express();//app생성
const cookieRouter=require('./routes/cookie');
const sessionRouter=require('./routes/session');
const cookieParser=require('cookie-parser');//npm install cookie-parser, 쿠키 확인
const session=require('express-session');//npm install express-session
const fileStore=require('session-file-store')(session);//npm install session-file-store, 세션이 생성될 때 세션을 저장할 폴더를 만들어서 저장(저장소)

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);

app.use(cookieParser()); //쿠키값 확인 시 필요
app.use(session({
    //추가적으로 설정하고 싶은 정보 적기
    httpOnly: true, //http 요청으로 온 것만 처리
    resave: false, //세션을 언제나 저장을 할 건지 설정 하는 거
    secret: 'secret key',//암호화 하는데 쓰일 키 '키 값'
    store: new fileStore()//여러 사용자의 세션을 저장하기 위한 저장소
}));//세션 사용 시 필요

app.use('/c', cookieRouter);
app.use('/s', sessionRouter);

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

