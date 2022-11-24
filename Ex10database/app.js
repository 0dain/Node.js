const express=require('express');
const nunjucks=require('nunjucks');//넌적스 사용
const indexRouter=require('./routes');
const bodyParser=require('body-parser');//post로 정보 주고 받을 때 필요
const app=express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
app.set('view engine', 'html');//넌적스 사용 시 필수 지정!

app.use(bodyParser.urlencoded({extended: true}));//post로 정보 주고 받을 때 필요
app.use('/', indexRouter);

nunjucks.configure('views', {
    express: app,
    watch: true
});//넌적스 사용 시 필수 설정!
                
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

