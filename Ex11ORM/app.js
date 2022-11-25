const express = require('express');
const { sequelize } = require('./models');//index 생략 가능 => ./models/index
//index.js에서 가져올 때 User는 필요없어서 sequelize만 가져오는 거임
const app = express();//app생성

//app.set('key', value): 키에 값을 저장하도록 설정
app.set('port', process.env.PORT || 8888);

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

