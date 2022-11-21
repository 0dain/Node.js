const {URL}=require('url');

//url 생성자 활용
    //new URL(내가 실제 다뤄주고 싶은 주소)
const myURL=new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9B%94%EB%93%9C%EC%BB%B5%EC%9D%BC%EC%A0%95');

console.log('searchParams:', myURL.searchParams);//url의 전체 쿼리 확인
//특정한 파라미터만 보고 싶다면?!
//myURL.searchParams.get('내가 확인하고 싶은 파라미터의 키 값 적어주기')
console.log('searchParams.get(): ', myURL.searchParams.get('query'));//특정 키의 값
//colors=red,blue,orange
//getAll(): 값이 여러 개일 경우 전부 가져오기

//특정한 키가 지정되어 있는 값이 있는지 확인
console.log('searchParams.has(): ', myURL.searchParams.has('page'));// 특정 키를 가지고 있는지 확인(true/false)

//키만 가져오고나 값만 가져오고 싶다면?!
console.log('searchParams.keys(): ', myURL.searchParams.keys());//쿼리의 모든 키 값
console.log('searchParams.values(): ', myURL.searchParams.values());//쿼리의 모든 values 값

//임의적으로 url의 값을 추가하기
myURL.searchParams.append('key', 'value1');
myURL.searchParams.append('key', 'value2');
console.log('추가한 url',myURL.searchParams.getAll('key'));

//key가 가지고 있는 값을 value3으로 바꾸겠다!
myURL.searchParams.set('key', 'value3');
console.log('set한 url',myURL.searchParams.getAll('key'));

//임의적으로 url 값 지우기
myURL.searchParams.delete('key');
console.log('지운 url',myURL.searchParams.getAll('key'));

//문자열 형태로 변경
console.log('searchParams.toString(): ', myURL.searchParams.toString());
myURL.search=myURL.searchParams.toString();