const express=require('express');
const app=express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                //기본 포트가 있다면 그 번호로 포트 지정
                //그렇지 않으면 8888을 쓰겠다! 는 의미

//Ex02.html 부르기
app.get('/home', (req, res)=>{//라우팅 => 특정한 요청, 경로에 따라서 다르게 해줄 수 있는 것
    //http 모듈 => html 파일을 응답하기 위해서 필요한 것 -> fs 모듈

    //응답 헤더 작성하지 않아도 됨

    //          //현재파일 경로 : __dirname
    res.sendFile(__dirname+'/Ex02.html');//특정 파일 응답
    // res.sendFile('./Ex02.html');//특정 파일 응답
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

