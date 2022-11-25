const mysql2=require('mysql2');//npm install mysql2

const db_info={
    host:'localhost',
    port: '3306',
    user: 'test',
    password: '1234',
    database: 'testdb'    
}

module.exports={
    //초기화
    init: function(){
        return mysql2.createConnection(db_info);
    },
    //연결
    connect: function(conn){
        //예외처리 해야 함, 연결이 안 될 수도 있기 때문!
        conn.connect(function(err){
            if(err){
                console.error('mysql 연결 오류💢 : '+err);
            }else{
                console.log('mysql 연결 성공🎉');
            }
        });//얘를 가지고 실제 연결 하는 거임
    }
}