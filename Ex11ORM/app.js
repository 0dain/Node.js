const {request} = require('express');
const express = require('express');
const indexRouter = require('./routes');
const { sequelize } = require('./models');//index 생략 가능 => ./models/index
//index.js에서 가져올 때 User는 필요없어서 sequelize만 가져오는 거임

const bodyParser = require('body-parser');//post형식으로 요청할 때 필요

//세션
const session = require('express-session');
const fileStore = require('session-file-store')(session);//만들어지는 세션 저장하는 공간 만들기

const app = express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT || 8888);


//라우터 호출 전에 bodyParser를 붙여줘야 함
app.use(bodyParser.urlencoded({extended:false}));//form데이터 받아올 때 주로 사용
//비동기 통신은 json형식을 주로 사용함
app.use(bodyParser.json());//json데이터
//세션 관련
app.use(session({
    secret : 'secret key', //세션 암호화할 때 쓰이는 키
    store : new fileStore()
}))

app.use('/', indexRouter);

//앱이 실행될 때
// sequelize.sync({force: false(서버를 실행할 때마다 테이블을 재생성 할 것인지 아닌지 설정하는 것!)});
//false => 한 번 만들면 재생성 하지 않겠다
sequelize.sync({ force: false })
    .then(() => {
        console.log("DB 연결 성공🎉")
    })
    .catch((err) => {
        console.error(err)
    });


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});

