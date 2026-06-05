//Описание:
//Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true, или "No"строку для false.

//Решение:
function boolToWord( bool ){
  return bool? "Yes" : "No";
}
console.log(boolToWord(true));
console.log(boolToWord(false));

