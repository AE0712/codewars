/*Описание:
Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить новое значение для этого свойства.
 Если свойство уже существует в объекте, должна быть выброшена ошибка.*/

 function addProperty(obj, prop, value) {
  if(obj.hasOwnProperty(prop)) {
    throw new Error("Property already exists");
  } else {
    obj[prop] = value;
  }
}
const newObj = {

};
addProperty(newObj, "name", "Palle");
addProperty(newObj, "age", 35);
//addProperty(newObj, "age", 43);
console.log(newObj);

