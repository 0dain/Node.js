const Sequelize=require('sequelize');

//Sequelize가 가지고 있는 Model을 상속 받는다
module.exports = class User extends Sequelize.Model{
    //init: user 필드 자료형 지정, 테이블 관련 설정
    //associate: 테이블 간의 관계 설정

    static init(sequelize){
        //init을 호출하면 부모(super)의 init을 재정의해서 리턴하겠다!
        return super.init({
            id:{
                type: Sequelize.STRING(50),
                primaryKey: true                
            },
            pw:{
                type: Sequelize.STRING(50),
                allowNull: false
            },
            age:{
                type: Sequelize.INTEGER,
                allowNull: false
            }
        },{
            //테이블에 대한 설정 지정
            sequelize, //init 매개변수 sequelize 그대로 넣어줌
            modelName: 'User', //프로젝트에서 사용할 모델의 이름
            tableName: 'users', //실제 DB에 지정되는 테이블 이름
            charset: 'utf8', //인코딩 방식 지정
        });
    }

    static associate(db){
        //테이블끼리 관계 설정
        // User / Project 라는 객체가 있다고 가정
        // user와 project가 1대 다 관계라면?!
        // db.User.hasMany(db.Project,{foreignKey: 'id', sourceKey:'id'}); //1에 해당하는 테이블
        // db.User.hasMany(db.Project,{foreignKey: 'id', sourceKey:'id'}); //1에 해당하는 테이블
        // db.Project.belongsTo(db.User, {foreignKey: 'id', targetKey:'id'});//다에 해당하는 테이블
        // 1대1이라면?
        // db.User.hasOne
        // 다대다
        // db.User.belongsToMany

    }
}