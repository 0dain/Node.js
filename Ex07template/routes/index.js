const express=require('express');
const router=express.Router();

//특정 요청 시
//index.html 응답 + 특정 데이터(html에서 출력될 수 있도록)

router.get('/', (req, res)=>{
    //render 호출 시
    //보내는 값 {}: 넌적스가 처리함
    //index: index.html을 렌더링 해서 보내겠다는 뜻

    // res.render('파일이름', (특정 데이터 값{키:값}));
    res.render('index', {title: 'value'});
});

module.exports=router;