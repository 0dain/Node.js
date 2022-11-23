const express=require('express');
const nunjucks=require('nunjucks');//넌적스 템플릿 엔진 사용
const indexRouter=require('./routes');//index.js 불러오겠다!

const app=express();//app생성

app.set('port', process.env.PORT||8888);
app.set('view engine', 'html');//넌적스 = njk 또는 html로 쓰면 됨, 넌적스 사용할 때 해줘야 하는 세팅

app.use('/', indexRouter);// /일 때 indexRouter를 실행하겠다!

nunjucks.configure('views',{
    express: app,//위에 생성한 app 객체 연결
    watch: true, //html 파일이 연결되면 템플릿 엔진을 다시 렌더링 하는 역할
});//넌적스 사용을 위한 설정
                
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

