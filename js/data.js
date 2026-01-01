/*******************************
 * DEFAULT BOOK DATA
 *******************************/
const defaultBooks = [
  {
    id: "B101",
    title: "JavaScript Basics",
    author: "John",
    category: "Programming",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B102",
    title: "HTML & CSS",
    author: "Anna",
    category: "Web Development",
    totalCopies: 4,
    available: 4
  },
  {
    id: "B103",
    title: "Data Structures and Algorithms Made Easy",
    author: "Narasimha Karumanchi",
    category: "Programming",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B104",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Programming",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B105",
    title: "Operating System Concepts",
    author: "Abraham Silberschatz",
    category: "Operating Systems",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B106",
    title: "Computer Networks",
    author: "Andrew S. Tanenbaum",
    category: "Networking",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B107",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    category: "Database",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B108",
    title: "Software Engineering",
    author: "Ian Sommerville",
    category: "Software",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B109",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B110",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    category: "AI",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B111",
    title: "Discrete Mathematics and Its Applications",
    author: "Kenneth H. Rosen",
    category: "Mathematics",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B112",
    title: "Digital Logic and Computer Design",
    author: "M. Morris Mano",
    category: "Electronics",
    totalCopies: 5,
    available: 5
  },
  {
    id: "B113",
    title: "Python Programming",
    author: "John Zelle",
    category: "Programming",
    totalCopies: 5,
    available: 5
  },

  // Novels
  {
    id: "B114",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B115",
    title: "1984",
    author: "George Orwell",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B116",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B117",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J.K. Rowling",
    category: "Novel",
    totalCopies: 4,
    available: 4
  },
  {
    id: "B118",
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B119",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Novel",
    totalCopies: 4,
    available: 4
  },
  {
    id: "B120",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B121",
    title: "Life of Pi",
    author: "Yann Martel",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B122",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Novel",
    totalCopies: 3,
    available: 3
  },
  {
    id: "B123",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Finance",
    totalCopies: 3,
    available: 3
  }
];

/*******************************
 * INITIALIZE BOOKS
 *******************************/
let books = JSON.parse(localStorage.getItem("books"));

if (!books || books.length === 0) {
  books = defaultBooks;
  localStorage.setItem("books", JSON.stringify(books));
}

/*******************************
 * INITIALIZE REQUESTS
 *******************************/
let requests = JSON.parse(localStorage.getItem("requests")) || [];

/*******************************
 * SAVE FUNCTION
 *******************************/
function saveData() {
  localStorage.setItem("books", JSON.stringify(books));
  localStorage.setItem("requests", JSON.stringify(requests));
}
