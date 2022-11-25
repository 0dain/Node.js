const Sequelize=require('sequelize');
const User=require('./user');
const env='development';
const config=require('../config/config.json')[env];//config에서 development만 가져올 수 있도록 지정

//가져온 Sequelize에 DB연결
// const sequelize = new Sequelize(config.database, config.username, config.password, config(config 설정 자체라는 뜻));
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db={};//sequelize, object 정보 넣어 줄 거임

//db안에 sequelize 를 넣어줌
// db.sequelize(key)=sequelize(value-db정보);
db.sequelize=sequelize;
//객체 연결
db.User=User;//db와 테이블 연결

User.init(sequelize);//테이블믈 초기화
User.associate(db); //관계 설정 => 위에 db들 넣어주면 됨

module.exports=db;