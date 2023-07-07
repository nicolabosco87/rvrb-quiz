import { PrismaClient, Question } from "../../models";

const prisma = new PrismaClient();

const triviaQuestions: Pick<Question, "answer" | "question">[] = [
  // Add the remaining trivia questions here
  {
    question: "What is the smallest country in the world by land area?",
    answer: "Vatican City",
  },
  {
    question: "What is the longest river in Africa?",
    answer: "The Nile",
  },
  {
    question: 'Who wrote the novel "To Kill a Mockingbird"?',
    answer: "Harper Lee",
  },
  {
    question: "What is the largest organ in the human body?",
    answer: "Skin",
  },
  {
    question: "In what year did the first iPhone come out?",
    answer: "2007",
  },
  {
    question: "Which country gifted the Statue of Liberty to the United States?",
    answer: "France",
  },
  {
    question: 'Who painted the famous artwork "The Starry Night"?',
    answer: "Vincent van Gogh",
  },
  {
    question: "What is the name of the tallest mountain in the Solar System?",
    answer: "Olympus Mons",
  },
  {
    question: "Which planet in our Solar System has the most moons?",
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    question: "What is the capital city of Australia?",
    answer: "Canberra",
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    answer: "Mars",
  },
  {
    question: "What is the largest ocean in the world?",
    answer: "Pacific Ocean",
  },
  {
    question: "Who is the author of the Harry Potter book series?",
    answer: "J.K. Rowling",
  },
  {
    question: "What is the chemical symbol for oxygen?",
    answer: "O",
  },
  {
    question: "Which country is known for inventing pizza?",
    answer: "Italy",
  },
  {
    question: "In which city would you find the Eiffel Tower?",
    answer: "Paris",
  },
  {
    question: "Which animal is the largest living mammal?",
    answer: "Blue whale",
  },
  {
    question: "Who is credited with inventing the World Wide Web?",
    answer: "Tim Berners-Lee",
  },
  {
    question: "What is the largest planet in our Solar System?",
    answer: "Jupiter",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    answer: "Portuguese",
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the chemical symbol for hydrogen?",
    answer: "H",
  },
  {
    question: "Which city hosted the 2016 Summer Olympics?",
    answer: "Rio de Janeiro",
  },
  {
    question: "What is the world's most populous country?",
    answer: "China",
  },
  {
    question: "Who is the author of the Lord of the Rings book series?",
    answer: "J.R.R. Tolkien",
  },
  {
    question: "What is the currency of Japan?",
    answer: "Japanese yen",
  },
  {
    question: 'Which planet is known as the "Giant of our Solar System"?',
    answer: "Jupiter",
  },
  {
    question: "What is the largest desert in the world?",
    answer: "Sahara Desert",
  },
  {
    question: "Who was the first person to step on the moon?",
    answer: "Neil Armstrong",
  },
  {
    question: "What is the national animal of Canada?",
    answer: "Beaver",
  },
  {
    question: "Which city is home to the famous Taj Mahal?",
    answer: "Agra",
  },
  {
    question: "What is the chemical symbol for carbon?",
    answer: "C",
  },
  {
    question: 'Who is the author of the book "Pride and Prejudice"?',
    answer: "Jane Austen",
  },
  {
    question: "What is the world's highest mountain?",
    answer: "Mount Everest",
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    answer: "Japan",
  },
  {
    question: "Who is the famous physicist who developed the theory of relativity?",
    answer: "Albert Einstein",
  },
  {
    question: "What is the national bird of the United States?",
    answer: "Bald Eagle",
  },
  {
    question: 'Which city is known as the "Big Apple"?',
    answer: "New York City",
  },
  {
    question: "What is the chemical symbol for silver?",
    answer: "Ag",
  },
  {
    question: 'Who is the author of the book "1984"?',
    answer: "George Orwell",
  },
  {
    question: "What is the capital of Iceland?",
    answer: "Reykjavik",
  },
  {
    question: 'Who is the author of the novel "Crime and Punishment"?',
    answer: "Fyodor Dostoevsky",
  },
  {
    question: "What is the chemical formula for sulfuric acid?",
    answer: "H2SO4",
  },
  {
    question: "Which planet has the highest average surface temperature in our Solar System?",
    answer: "Venus",
  },
  {
    question: "In which year did World War I begin?",
    answer: "1914",
  },
  {
    question: "Who discovered penicillin?",
    answer: "Alexander Fleming",
  },
  {
    question: "What is the largest species of shark?",
    answer: "Whale Shark",
  },
  {
    question: 'Who painted the artwork "The Persistence of Memory"?',
    answer: "Salvador Dali",
  },
  {
    question: "What is the chemical symbol for potassium?",
    answer: "K",
  },
  {
    question: "Which English physicist discovered the phenomenon of electromagnetic induction?",
    answer: "Michael Faraday",
  },
  {
    question: "What is the largest planet in the Solar System?",
    answer: "Jupiter",
  },
  {
    question: 'Who wrote the novel "War and Peace"?',
    answer: "Leo Tolstoy",
  },
  {
    question: "What is the chemical formula for nitric acid?",
    answer: "HNO3",
  },
  {
    question: "Which country has the largest land area?",
    answer: "Russia",
  },
  {
    question: "In which year did the Chernobyl nuclear disaster occur?",
    answer: "1986",
  },
  {
    question: "Who is considered the father of modern physics?",
    answer: "Isaac Newton",
  },
  {
    question: "What is the largest bird species in the world?",
    answer: "Ostrich",
  },
  {
    question: 'Who painted the artwork "The Last Supper"?',
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the chemical symbol for nitrogen?",
    answer: "N",
  },
  {
    question: "Who proposed the theory of general relativity?",
    answer: "Albert Einstein",
  },
  {
    question: "What is the official language of Brazil?",
    answer: "Portuguese",
  },
  {
    question: 'Which famous artist created the painting "Guernica"?',
    answer: "Pablo Picasso",
  },
  {
    question: "What is the chemical formula for hydrochloric acid?",
    answer: "HCl",
  },
  {
    question: "Which city hosted the 1956 Summer Olympics?",
    answer: "Melbourne",
  },
  {
    question: 'Who wrote the novel "The Great Gatsby"?',
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "What is the currency of Switzerland?",
    answer: "Swiss franc",
  },
  {
    question: "Who formulated the laws of motion?",
    answer: "Isaac Newton",
  },
  {
    question: "What is the largest volcano in the world?",
    answer: "Mauna Loa (Hawaii)",
  },
  {
    question: 'Who is the author of the book "The Catcher in the Rye"?',
    answer: "J.D. Salinger",
  },
  {
    question: "What is the chemical symbol for calcium?",
    answer: "Ca",
  },
  {
    question: "Which city is home to the famous Leaning Tower?",
    answer: "Pisa",
  },
  {
    question: "Who discovered the law of gravity?",
    answer: "Isaac Newton",
  },
  {
    question: "What is the national flower of Japan?",
    answer: "Cherry blossom",
  },
  {
    question: "Which mathematician is known for his famous theorem on right-angled triangles?",
    answer: "Pythagoras",
  },
  {
    question: "What is the official language of Egypt?",
    answer: "Arabic",
  },
  {
    question: 'Who is the author of the play "Romeo and Juliet"?',
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for sodium?",
    answer: "Na",
  },
  {
    question: "Which scientist developed the theory of evolution by natural selection?",
    answer: "Charles Darwin",
  },
  {
    question: "What is the national animal of Australia?",
    answer: "Red kangaroo",
  },
  {
    question: 'Which city is known as the "City of Love"?',
    answer: "Paris",
  },
  {
    question: "Who discovered the law of conservation of energy?",
    answer: "James Prescott Joule",
  },
];

async function seed() {
  for (const question of triviaQuestions) {
    await prisma.question.create({
      data: question,
    });
  }
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
