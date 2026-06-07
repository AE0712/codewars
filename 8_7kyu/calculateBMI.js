/*Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост² ) .

Если ИМТ <= 18,5, вернуть "Недостаточный вес".

Если ИМТ <= 25,0, вернуть "Нормальный"

Если ИМТ <= 30,0, вернуть "Избыточный вес".

Если ИМТ > 30, вернуть "Ожирение".*/

function bmi(weight, height) {
  const newBmi = weight / (height ** 2);
  
  if (newBmi > 30) return "Obese";
  if (newBmi > 25) return "Overweight"; 
  if (newBmi > 18.5) return "Normal";
  return "Underweight";
};

console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));


