const fs=require('fs');

//버퍼 -> 스트림: 버퍼의 크기를 작게 만든 후 여러 번 나눠 보내는 방식

// fs.createReadStream('어떤 파일을 읽을 건지 경로', {키 : 값});
    //highWaterMark: 버퍼 크기 지정(기본값: 64)
const readStream=fs.createReadStream('./readme.txt', {highWaterMark : 16});
const data=[];//데이터 담을 곳

//파일 읽기가 시작되면 발생하는 이벤트=> .on(데이터 이름, 콜백함수)
readStream.on('data',(chunk)=>{//chunk: 데이터의 일부분
    data.push(chunk); //data 배열에 chunk 데이터 넣기
    console.log('data: ', chunk)
});

//파일을 다 읽으면 발생하는 이벤트
readStream.on('end', ()=>{
    //최종적으로 다시 하나의 문자열로 만들기
    console.log(Buffer.concat(data).toString());
})