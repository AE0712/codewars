//Описание:
//Дополните решение так, чтобы оно переворачивало переданную ему строку.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

//Решение:

/*function solution(str){
  return str.split('').reverse().join('');
}
console.log(solution('world'));
console.log(solution('word'));*/

function solution(str) {
  result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(solution('world'));
console.log(solution('word'));