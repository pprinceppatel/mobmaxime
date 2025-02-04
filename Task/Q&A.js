const qutionsData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
    points: 10,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    points: 10,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "J.K. Rowling",
    ],
    answer: "William Shakespeare",
    points: 10,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "HO"],
    answer: "H2O",
    points: 10,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
    points: 10,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
    points: 10,
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
    points: 10,
  },
  {
    question: "Which programming language is used for Android app development?",
    options: ["Python", "Java", "Swift", "C++"],
    answer: "Java",
    points: 10,
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
    answer: "Hydrogen",
    points: 10,
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
    answer: "300,000 km/s",
    points: 10,
  },
];

// console.log(qutionsData);

const answerData = [
  "Paris",
  "Earth",
  "Charles Dickens",
  "H2O",
  "Oxygen",
  "Pacific Ocean",
  "Isaac Newton",
  "java",
  "Hydrogen",
  "150,000 km/s",
];

// => whith for loops and other

// let result = 0;

// for (let i = 0; i < answerData.length; i++) {
//   const answer = answerData[i];
//   const question = qutionsData[i];
//   console.log(answer);
//   console.log(question);

//   if (answer === qutionsData.answer) {
//     result += question.points;
//   }
// }

// console.log(result);

// => with reduce mathod

const result = qutionsData.reduce((p, c, i) => {
  if (answerData[i]) {
    if (c.answer === answerData[i]) {
      return p + c.points;
    } else {
      return p - 5;
    }
  }
  return p;
}, 0);

console.log(result);
