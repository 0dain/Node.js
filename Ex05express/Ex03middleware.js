const express=require('express');
const { nextTick } = require('process');
const app=express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                //기본 포트가 있다면 그 번호로 포트 지정
                //그렇지 않으면 8888을 쓰겠다! 는 의미

app.get('/', (req, res)=>{
    res.send('Hello node!');
    next();//다음 미들웨어로 넘어가도록 제어해주는 기능
});

//미들웨어: 요청과 응답 사이에서 무언가를 처리해주는 함수
const myLog=function(req, res){
    console.log('LOGGED');
}

//미들웨어 사용하기
app.use(myLog);//만든 미들웨어 qpp에 붙여줌


app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

