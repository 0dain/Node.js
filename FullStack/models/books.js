const Sequelize=require('sequelize');

//Sequelize가 가지고 있는 Model을 상속 받는다
module.exports = class Books extends Sequelize.Model{
    //init: books 필드 자료형 지정, 테이블 관련 설정
    //associate: 테이블 간의 관계 설정

    static init(sequelize){
        return super.init({
            num:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title:{
                type: Sequelize.STRING(50),
                allowNull: false
            },
            author:{
                type: Sequelize.STRING(30),
                allowNull: false
            },
            company:{
                type: Sequelize.STRING(50),
                allowNull: false
            },
            isbn:{
                type: Sequelize.STRING(30),
                allowNull: false
            },
            count:{
                type: Sequelize.INTEGER,
                allowNull: false
            }
        },{
            //테이블에 대한 설정 지정
            sequelize, //init 매개변수 sequelize 그대로 넣어줌
            modelName: 'Books', //프로젝트에서 사용할 모델의 이름
            tableName: 'books', //DB에 지정되는 테이블 이름
            charset: 'utf8' //인코딩 방식
        });
    }

    static associate(db){
        //테이블끼리 관계 설정
    }

}