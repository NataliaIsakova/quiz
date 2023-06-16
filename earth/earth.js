const button = document.querySelector(".btn");
button.addEventListener("click", result);

const finish = document.querySelector(".showResult");
const score = document.querySelector(".show");
const text = document.querySelector(".level");

function result(e) {
    e.preventDefault();
    
    let points = 0;

    if(document.querySelector(".answerOne").checked) {
        points++;
    }
    if(document.querySelector(".answerTwo").checked) {
        points++;
    }
    if(document.querySelector(".answerThree").checked) {
        points++;
    }
    if(document.querySelector(".answerFour").checked) {
        points++;
    }
    if(document.querySelector(".answerFive").checked) {
        points++;
    }
    if(document.querySelector(".answerSix").checked) {
        points++;
    }
    if(document.querySelector(".answerSeven").checked) {
        points++;
    }
    if(document.querySelector(".answerEight").checked) {
        points++;
    }
    if(document.querySelector(".answerNine").checked) {
        points++;
    }
    if(document.querySelector(".answerTen").checked) {
        points++;
    }

    score.textContent = "Вы набрали: " + points + " из 10 баллов";
    finish.style.display = 'block';
    score.style.display = 'block';

    if (points <= 3) {
        text.textContent = "Видимо Вы не очень хорошо учились в школе!";   
    }
    
    else if (points > 3 && points < 7) {
        text.textContent = "Уделяйте больше времени саморазвитию, путешествуйте,читайте! Тогда в следующий раз Ваш счет будет выше.";
    }
    
    else {
        text.textContent = "Идеально, вы просто гений, продолжайте в том же духе!";
    }

    text.style.display = 'block';
}