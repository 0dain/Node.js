//http 모듈
const http = require('http'); //웹 브라우저의 요청/응답 처리

http.createServer((req, res)=>{
    //응답 코드: 200/404/500 ...
    res.writeHead(200, {'Content-Type':'text/html; chatset=utf-8'});//응답 형식, 어떤 정보인지 담고 있음 
    res.write('<h1>Hello world!</h1>')//클라이언트로 보낼 데이터, 본문 => body엔 데이터가 담겨있음
    res.end('<p>node.js</p>')//응답 종료
}) //listen 메서드 사용해서 콜백함수 넣는 방식
    .listen(8888, ()=>{
        //서버 연결 대기 동안 뭘 할 건지
        console.log('8888번 포트에서 서버 연결 대기중!');
    });
