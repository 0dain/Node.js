const http=require('http');

const server=http.createServer((req, res)=>{
    //응답 코드: 200/404/500 ...
    res.writeHead(200, {'Content-Type':'text/html; chatset=utf-8'});//응답 형식, 어떤 정보인지 담고 있음 
    res.write('<h1>Hello world!</h1>')//클라이언트로 보낼 데이터, 본문 => body엔 데이터가 담겨있음
    res.end('<p>node.js</p>')//응답 종료
});

server.listen(8888); //포트번호 지정

//이벤트 리스너 붙이는 방법
server.on('listening', ()=>{
    console.log('8888번 포트에서 서버 연결 대기중~')
})

server.on('error', (error)=>{
    console.log(error)
})