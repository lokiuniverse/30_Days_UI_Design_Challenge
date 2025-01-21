const data = [
    {
        names: "National Animal",
        options: {
            option1: "Leo",
            option2: "Tiger",
            option3: "Lion",
            option4: "Cow"
        }
    },
    {
        names: "National Game",
        options: {
            option1: "Hockey",
            option2: "Cricket",
            option3: "Kabbadi",
            option4: "vollyball"
        }
    },
    {
        names: "National Song",
        options: {
            option1: "Vande Mataram",
            option2: "Jana Gana Mana",
            option3: "Shall we Overcome",
            option4: "None of the above"
        }
    },
    {
        names: "Who invented the national flag?",
        options: {
            option1: "Rabindranath Tagore",
            option2: "Bankim Chandra Chatterjee",
            option3: "Pingali Venkayya",
            option4: "Jawaharlal Nehru"
        }
    }
];

const next = document.getElementById("next");
let currentIndex = 0;

next.addEventListener("click", () => {
    const currentQuestion = data[currentIndex];
    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");
    const choice3 = document.getElementById("choice3");
    const choice4 = document.getElementById("choice4");
    const question = document.getElementById("question");
    question.innerHTML = currentQuestion.names;
    choice1.innerHTML = currentQuestion.options.option1;
    choice2.innerHTML = currentQuestion.options.option2;
    choice3.innerHTML = currentQuestion.options.option3;
    choice4.innerHTML = currentQuestion.options.option4;

    currentIndex = (currentIndex + 1) % data.length; // Move to the next question, looping back to the start if necessary
});
