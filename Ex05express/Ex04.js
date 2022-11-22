const express=require('express');
const app=express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                //기본 포트가 있다면 그 번호로 포트 지정
                //그렇지 않으면 8888을 쓰겠다! 는 의미

//static: 정적파일 경로 지정(미들웨어)
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
   //Ex04.html 클라이언트로 바로 응답을 하는 게 아니라 
   //static이라는 미들웨어를 거친 후 클라이언트에 도착하게 됨!
   //html 내에 폴더 경로를 지정하지 않더라도 자동으로 서버에서 static 폴더(public)에
   //해당 파일을 찾은 후 띄워줌
   //경로가 드러나지 않아서 보안상 도움이 될 수 있음
    res.sendFile(__dirname+'/Ex04.html');
});
                
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

