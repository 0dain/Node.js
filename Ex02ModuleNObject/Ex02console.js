//특정 레이블에 해당하는 time~timeEnd 사이의 시간 측정
console.time('전체 시간');
console.log('일반 로그');
console.error('에러 메세지');
console.table([{name: '다인', age: 29}, {name: '준호', age: 32}]);

const obj={
    outside:{
        inside:{
            key:'value'
        }
    }
}

//객체 안에 객체가 계속 있을 때 어디까지 출력하고 싶은지 지정해주기 : dir
console.dir(obj, {colors:false, depth:2}); //depth 기본값 2
console.dir(obj, {colors: true, depth:1});

console.timeEnd('전체 시간');