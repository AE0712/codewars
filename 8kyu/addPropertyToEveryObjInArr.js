/*Описание:
Ваша задача — добавить новое свойство usersAnswer к каждому объекту в массиве questions. Значение свойства usersAnswer должно быть установлено равным null. Решение должно работать для массивов любой длины.

Например:*/

const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
for (let i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null;
}
/*questions.forEach(q => {
    q.userAnswer = null;
})*/
console.log(questions);
