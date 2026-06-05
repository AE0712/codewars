/*Описание:
Ваша задача — создать функцию, которая принимает в качестве аргумента любое неотрицательное целое число и возвращает его вместе с цифрами в порядке убывания. По сути, нужно переставить цифры, чтобы получить максимально возможное число.*/

function descendingOrder(n){
  let str = n.toString();
  let arr = str.split('');
  arr.sort(function (a, b) {
   return b - a;
  })
  let joined = arr.join('');
  joined = Number(joined);
  return joined;
}

console.log(descendingOrder(12356));
console.log(descendingOrder(145263));
