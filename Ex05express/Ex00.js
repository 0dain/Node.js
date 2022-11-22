const express=require('express');
const app=express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                //기본 포트가 있다면 그 번호로 포트 지정
                //그렇지 않으면 8888을 쓰겠다! 는 의미
                
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

