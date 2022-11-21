const fs = require('fs').promises;
//fs모듈을 promises 형식으로 바꿔서 사용(비동기 방식)

fs.readFile('./readme.txt')
    .then((data)=>{
        //buffer
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })