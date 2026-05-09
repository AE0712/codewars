/*Описание:
Дано случайное неотрицательное число, и необходимо вернуть цифры этого числа в массиве в обратном порядке.

Пример (Ввод => Вывод):
35231 => [1,3,2,5,3]
0     => [0]
*/

//Решение:
function digitize(n) {
 return n.toString().split('').reverse().map(Number);
}
console.log(digitize(35231)); 
console.log(digitize(0));    