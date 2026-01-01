function loadRequests() {
  const table = document.getElementById("requestTable");
  table.innerHTML = `
    <tr>
      <th>User</th>
      <th>Book</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  `;

  requests.forEach((r, i) => {
    table.innerHTML += `
      <tr>
        <td>${r.user}</td>
        <td>${r.bookId}</td>
        <td>${r.status}</td>
        <td>
          <button onclick="approve(${i})">Approve</button>
          <button onclick="reject(${i})">Reject</button>
        </td>
      </tr>
    `;
  });
}

function approve(index) {
  const request = requests[index];
  const book = books.find(b => b.id === request.bookId);

  if (book.available === 0) {
    alert("Book not available");
    return;
  }

  book.available--;
  request.status = "Approved";
  saveData();
  loadRequests();
}

function reject(index) {
  requests[index].status = "Rejected";
  saveData();
  loadRequests();
}

loadRequests();
