document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("https://striveschool-api.herokuapp.com/books");
  const books = await response.json();

  const bookRow = document.getElementById("bookRow");

  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("col", "p-4");
    card.innerHTML = `
                <div class="card text-center h-100">
                    <img src="${book.img}" class="card-img-top" height="400" alt="Copertina libro">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Prezzo: ${book.price}€</p>
                        <button class="btn btn-scarta btn-sm btn-danger fw-bold" onclick="discardBook(this)">Delete</button>
                    </div>
                </div>
            `;
    bookRow.appendChild(card);
  });

  // Funzione per scartare un libro (rimuovere la card dalla pagina)
  window.discardBook = function (button) {
    const card = button.closest(".card");
    card.remove();
  };
});
