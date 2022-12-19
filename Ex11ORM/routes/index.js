//라우터
const express = require('express');
const User = require('../models/user');
const router = express.Router();//라우터 사용const User = require('../models/user');


//회원가입 - 비동기 방식
router.post('/insert', async(req, res, next)=>{
    
    // console.log(req.body);
    //id, pw, age 데이터 받기
    let {id, pw, age} = req.body;
    //ORM은 SQL문을 사용하지 않음
    try{
        //데이터 삽입 시 사용하는 함수 => create()
        //user라는 변수에 응답 값 받아서 저장하기 => 삽입된 데이터 반환
        const user = await User.create({
            //어떤 데이터 넣을 건지 지정해주기(키(컬럼 이름) : 값)
            id: id, //컬럼 이름 : 저장되는 실제 값(변수이름)
            pw: pw,
            age: age
        });

        res.json(user);//json형식으로 user 확인, 삽입된 데이터를 그대로 응답
    }catch(err){
        next(err);//에러처리 미들웨어
    }

});

//user 테이블에 있는 모든 값 조회(get)
router.get('/selectall', async(req, res, next)=>{

    try{
       const users = await User.findAll();//모든 값을 다 가져오겠다
       res.json(users);
    }catch(err){
        next(err)
    }

});

//특정 회원 조회
//로그인이라고 생각하고 세션에 id 담을 것!
// router.get('/select/:id (id 라는 키값으로 식별하겠다 라는 뜻)')
router.get('/select/:id', async(req, res, next)=>{
    try{
        const user = await User.findOne({
            // attributes : ['id', 'age'] id컬럼이랑 age컬럼의 값을 가져오겠다
            attributes : ['id', 'age'],
            //어디서?!
            // where : {id : req.params.id} 경로에 있는 id 값이 있는 id 컬럼에서!
            where : {id : req.params.id}
        });

        //app.js에서 만든 세션 사용
        req.session.login = user;
        res.json(user);//여기서는 필요없지만 수업이니까 확인하는 중~

    }catch(err){
        next(err)
    }
});

//회원정보 수정
//patch : 일부분만 수정(data: body에 실려서 옴)
router.patch('/update', async(req, res, next)=>{
    try{
        //로그인이 되어있다는 가정하에
            //위에 넣은 세션 값 id 사용
        const result = await User.update({
            //수정할 값 지정
            pw: req.body.pw,
            age: req.body.age 
        },{
            //수정할 때 지정할 속성(조건)
            // where : {id : req.session.login.id(세션에 저장된 정보 중에서 id 값을 가져 오는 것)}
            where : {id : req.session.login.id}
        });
        res.json(result);
    }catch(err){
        next(err)
    }
});

//회원정보 삭제
router.delete('/delete/:id', async(req, res, next) => {
    try{
        const result = await User.destroy({
            //특정 행만 삭제
                //경로에 적힌 id 값을 조건으로 넣음
            where: {id: req.params.id}
        });
        res.json(result);
    }catch(err){
        next(err)
    }
})


module.exports = router; //내보내기