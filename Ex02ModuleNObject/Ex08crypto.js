const crypto=require('crypto');

//1. 단방향 암호화: 복호화를 할 수 없는 암호화 방식(해시함수)

//pbkdf2 => node에서 지원하는 비밀번호 암호화 알고리즘
//salt 라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용

//64바이트 길이의 문자열 생성
crypto.randomBytes(64, (err, buf)=>{
    const salt=buf.toString('base64');
    console.log('salt: ', salt);

    //비밀번호, salt, 적용 반복 횟수, 출력바이트, 해시알고리즘
    //crypto.pbkdf2('바꿀 비밀번호', '문자열', 몇 번 반복할 건지 지정, 길이 지정, '사용할 해시 알고리즘');
    crypto.pbkdf2('password123', salt, 100000, 64, 'sha512', (err, key)=>{
        // key가 바뀐 비밀번호를 가지고 있음
        console.log('바뀐 패스워드: ', key.toString('base64'));
    });
});

//2. 양방향 암호화: 암호화된 문자열을 복호화 할 수 있음, 키가 사용됨
const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxtz123456';
const iv = '1234567890123456'; //암호화 시 사용되는 초기화 벡터

const cipher=crypto.createCipheriv(algorithm, key, iv);

// cipher.update('암호화할 문장', 인코딩 지정, 출력 인코딩 지정(출력바이트의 크기));
let result=cipher.update('암호화할 문장', 'utf8', 'base64');
result+=cipher.final('base64');//마지막에 출력 결과물 인코딩 넣으면 암호화 완료
console.log('암호화 된 비밀번호:',result)

//복호화 하기
const decipher=crypto.createDecipheriv(algorithm, key, iv);
// decipher.update(result, '인코딩 지정', '출력 인코딩 지정'); => 암호화 때와는 반대되는 순서로 인코딩 넣어주기
let result2=decipher.update(result, 'base64', 'utf8');
result2+=decipher.final('utf8');
console.log('복호화 결과: ', result2);