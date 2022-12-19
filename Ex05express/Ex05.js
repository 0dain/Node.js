const express=require('express');
const bodyParser=require('body-parser');//post요청 시 body 파싱을 위해 추가
const app=express();//app생성

//bodyParser 미들웨어 추가
app.use(bodyParser.urlencoded({extended:true}));//바디파싱해주기 위한 작업

app.set('port', process.env.PORT||8888);

app.get('/get', (req, res)=>{
    //파라미터로 받을 때
    //'/user/{id}'
    //user/1 => parameter
    //req.params.id
    //req.params.pw
    
    //쿼리스트링 => ?name=value&name2=value2
    let id=req.query.id;//쿼리스트링 중에서 id라는 값을 가져와라
    let pw=req.query.pw;//쿼리스트링 중에서 pw라는 값을 가져와라

    res.send('id: '+id+'pw: '+pw);//잘 가지고 오는지 확인
});

app.post('/post', (req, res)=>{
    //post는 body에 값이 담겨서 옴
    let id=req.body.id;
    let pw=req.body.pw;
    //이렇게 가져오면 오류남! 다른 작업을 해줘야 함! => 파싱작업 => 위에서 모듈 불러옴
        //처리해주면 오류 안 나고 잘 됨

    res.send('id: '+id+'pw: '+pw);//잘 가지고 오는지 확인
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

