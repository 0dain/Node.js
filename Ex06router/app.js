//app.js: node module 로딩, 초기화, router 유입점
const express=require('express');
// const indexRouter=require('./routes/index');//index.js 불러오기
const indexRouter=require('./routes');//이렇게만 불러와도 됨 index.js는 생략 가능(기본이기 때문에)
const userRouter=require('./routes/user');//user.js 불러오기
const app=express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                //기본 포트가 있다면 그 번호로 포트 지정
                //그렇지 않으면 8888을 쓰겠다! 는 의미
                
app.use('/', indexRouter);// /로 요청했을 때 indexRouter를 사용하겠다
app.use('/user', userRouter)// /user로 요청했을 때 userRouter를 사용하겠다

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

