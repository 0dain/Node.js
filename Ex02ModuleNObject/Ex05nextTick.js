setImmediate(()=>{//3
    //즉시 실행하고 싶을 때 권장하는 함수!
    console.log('immediate!');
});

setTimeout(()=>{//2
    console.log('timeout')
},0);

process.nextTick(()=>{ //1 => 이벤트루프가 다른 함수보다 우선으로 처리하도록 만듦
    console.log('nextTick');
});