const http=require('http');
const fs=require('fs').promises; //.promises => 비동기할 때 편하게 하려고 붙인 거임

//비동기함수 async
const server=http.createServer(async(req, res)=>{
    //Ex03.html 파일 응답
    //오류처리(200, 500)
    try{
        const f=await fs.readFile('./Ex03.html');
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(f);
    }catch(err){
        res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
        res.end(err.message);
    }
});

server.listen(8888);

server.on('listening', ()=>{
    console.log('8888번 포트에서 서버 연결 대기중!~');
});