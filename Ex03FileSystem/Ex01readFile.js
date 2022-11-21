const fs=require('fs');

// fs.readFile('읽어올 파일의 경로',('에러처리, 데이터)=>{

// });
fs.readFile('./readme.txt', (err, data)=>{
    if(err){//에러 발생 시 예외처리
        throw err;
    }

    console.log(data);//결과물은 buffer(메모리) 형식으로 제공
    console.log(data.toString());
});