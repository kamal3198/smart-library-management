document.addEventListener("DOMContentLoaded", () => {

  /* ===== USER ===== */
  const username = localStorage.getItem("username") || "Member";
  const welcome = document.getElementById("welcome");
  if (welcome) welcome.innerText = `Welcome, ${username}`;

  /* ===== DATA ===== */
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let requests = JSON.parse(localStorage.getItem("requests")) || [];

  /* ===== ELEMENTS ===== */
  const bookList = document.getElementById("book-list");
  const searchInput = document.getElementById("search");
  const bookSelect = document.getElementById("bookSelect");
  const historyList = document.getElementById("requestHistory");

  /* ===== DISPLAY BOOKS ===== */
  function displayBooks(list) {
    if (!bookList) return;

    bookList.innerHTML = "";
    list.forEach(book => {
      const div = document.createElement("div");
      div.className = "book-card";
      div.innerHTML = `
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        <span>${book.available > 0 ? "Available" : "Not Available"}</span>
      `;
      bookList.appendChild(div);
    });
  }

  displayBooks(books);

  /* ===== SEARCH ===== */
  window.searchBooks = function () {
    const term = searchInput.value.toLowerCase();
    const filtered = books.filter(b =>
      b.title.toLowerCase().includes(term)
    );
    displayBooks(filtered);
  };

  /* ===== REQUEST PANEL ===== */
  window.openRequestPanel = function () {
    document.getElementById("request-panel").style.right = "0";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.pointerEvents = "auto";
    loadOptions();
    loadHistory();
  };

  window.closeRequestPanel = function () {
    document.getElementById("request-panel").style.right = "-350px";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.pointerEvents = "none";
  };

  /* ===== LOAD BOOK OPTIONS ===== */
  function loadOptions() {
    if (!bookSelect) return;

    bookSelect.innerHTML = "";
    books.forEach(b => {
      if (b.available > 0) {
        const option = document.createElement("option");
        option.value = b.id;
        option.textContent = b.title;
        bookSelect.appendChild(option);
      }
    });
  }

  /* ===== SUBMIT REQUEST ===== */
  window.submitRequest = function () {
    const bookId = bookSelect.value;
    if (!bookId) {
      alert("Please select a book");
      return;
    }

    requests.push({
      user: username,
      bookId: bookId,
      status: "Pending",
      date: new Date().toLocaleDateString()
    });

    localStorage.setItem("requests", JSON.stringify(requests));
    loadHistory();
    alert("Book request submitted");
  };

  /* ===== REQUEST HISTORY ===== */
  function loadHistory() {
    if (!historyList) return;

    historyList.innerHTML = "";

    requests
      .filter(r => r.user === username)
      .forEach(r => {
        const book = books.find(b => b.id === r.bookId);
        const title = book ? book.title : "Unknown Book";

        const li = document.createElement("li");
        li.textContent = `${title} - ${r.status}`;
        historyList.appendChild(li);
      });
  }

});
