//setTimeout: n초 후에 실행
const timeout=setTimeout(()=>{
    console.log('1.5초 후 실행');
}, 1500);

//setInterval: n초마다 실행
const interval=setInterval(()=>{
    console.log('1초마다 실행');
},1000);

//n초마다 실행이 되다가 멈춰야 하니까 그걸 지정해주는 작업 해보기!
const timeout2=setTimeout(()=>{
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(()=>{
    clearTimeout(timeout2);//생성한 timeout 삭제
    clearInterval(interval);//생성한 interval 삭제
}, 2500);

const immediate=setImmediate(()=>{
    console.log('즉시 실행');
});

clearImmediate(immediate); //생성한 immediate 삭제