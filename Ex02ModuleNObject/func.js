//var.js에서 모듈을 내보낼 때 odd, even을 보낸다고 했기 때문에 여기서 받아 줄 때에도 odd, even을 받아주면 됨
const {odd, even}=require('./var');

function checkOddEven(num){
    if(num%2){
        return odd;
    }else{
        return even;
    }
}

module.exports=checkOddEven;
//모듈을 내보낼 건데 어떤 걸 내보낼 거냐 => checkOddEven을 내보내겠다!