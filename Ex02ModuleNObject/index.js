const {odd, even}=require('./var');
const checkOddEven=require('./func');

function checkStringOddEven(str){
    if(str.length%2){
        return odd;
    }else{
        return even;
    }
}

module.exports=checkStringOddEven;

console.log('숫자: ',checkOddEven(4));
console.log('문자: ',checkStringOddEven('안녕하'));