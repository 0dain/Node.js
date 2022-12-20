const express = require('express');
const Books = require('../models/books');
const router = express.Router();

//도서 추가
router.post('/insert', async(req, res, next)=>{
    
    // console.log(req.body);
    //id, pw, age 데이터 받기
    let {title, author, company, isbn, count} = req.body;
    //ORM은 SQL문을 사용하지 않음
    try{
        //데이터 삽입 시 사용하는 함수 => create()
        //user라는 변수에 응답 값 받아서 저장하기 => 삽입된 데이터 반환
        const book = await Books.create({
            //어떤 데이터 넣을 건지 지정해주기(키(컬럼 이름) : 값)
            title: title, //컬럼 이름 : 저장되는 실제 값(변수이름)
            author: author,
            company: company,
            isbn: isbn,
            count: count
        });

        res.json(book);//json형식으로 user 확인, 삽입된 데이터를 그대로 응답
    }catch(err){
        next(err);//에러처리 미들웨어
    }

});

//도서 전체 확인
router.get('/selectall', async(req, res, next)=>{

    try{
       const books = await Books.findAll();//모든 값을 다 가져오겠다
       res.json(books);
    }catch(err){
        next(err)
    }

});

//특정 도서 확인
router.get('/select/:num', async(req, res, next)=>{
    try{
        const book = await Books.findOne({
            // attributes : ['id', 'age'] id컬럼이랑 age컬럼의 값을 가져오겠다
            attributes : ['num', 'title', 'author', 'company', 'isbn', 'count'],
            //어디서?!
            // where : {id : req.params.id} 경로에 있는 id 값이 있는 id 컬럼에서!
            where : {num : req.params.num}
        });

        //app.js에서 만든 세션 사용
        req.session.bookNum = book;
        res.json(book);//여기서는 필요없지만 수업이니까 확인하는 중~

    }catch(err){
        next(err)
    }
});

//도서 정보 수정
router.patch('/update/:num', async(req, res, next)=>{
    try{
        const result = await Books.update({
            //수정할 값 지정
            title: req.body.title,
            author: req.body.author,
            company: req.body.company,
            isbn: req.body.isbn,
            count: req.body.count

        },{
            //수정할 때 지정할 속성(조건)
            // where : {id : req.session.login.id(세션에 저장된 정보 중에서 id 값을 가져 오는 것)}
            where : {num : req.session.bookNum.num}
        });
        res.json(result);
    }catch(err){
        next(err)
    }
});

//도서삭제
router.delete('/delete/:num', async(req, res, next) => {
    try{
        const result = await Books.destroy({
            //특정 행만 삭제
                //경로에 적힌 id 값을 조건으로 넣음
            where: {num: req.params.num}
        });
        res.json(result);
    }catch(err){
        next(err)
    }
});


module.exports = router; //내보내기