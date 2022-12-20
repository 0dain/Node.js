const {request} = require('express');
const express = require('express');
const indexRouter = require('./routes');
const {sequelize} = require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

const app = express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                //기본 포트가 있다면 그 번호로 포트 지정
                //그렇지 않으면 8888을 쓰겠다! 는 의미
                
//라우터 호출 전에 bodyParser를 붙여줘야 함
app.use(bodyParser.urlencoded({extended:false}));//form데이터 받아올 때 주로 사용
//비동기 통신은 json형식을 주로 사용함
app.use(bodyParser.json());//json데이터

app.use(session({
    secret : 'secret key', //세션 암호화할 때 쓰이는 키
    store : new fileStore()
}))

app.use('/book', indexRouter);

sequelize.sync({ force: false })
    .then(() => {
        console.log("DB 연결 성공🎉")
    })
    .catch((err) => {
        console.error(err)
    });


app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});