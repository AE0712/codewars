//Описание:
//Дополните решение так, чтобы оно переворачивало переданную ему строку.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

//Решение:

function solution(str){
  return str.split('').reverse().join('');
}
console.log(solution('world'));
console.log(solution('word'));

