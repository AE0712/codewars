/*Описание:
В этом простом задании вам дано число, и вы должны сделать его отрицательным. Но может быть, это число уже отрицательное?

Примеры
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Примечания
Число может быть уже отрицательным, в этом случае никаких изменений не требуется.
Нуль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.*/

//Решение:
function makeNegative(num) {
return (num > 0) ? -num : num;
}
 
console.log(makeNegative(5));
console.log(makeNegative(-3));
console.log(makeNegative(0));


