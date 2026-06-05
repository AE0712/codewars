/*Описание:
Я новичок в программировании, и теперь мне нужно получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.

P.S. Каждый массив содержит только целые числа. Результатом также является число.*/

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    for(let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
}   let sum2 = 0;
    for(let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }
    return sum1 + sum2;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));


