//Chiamata fetch
fetch(" https://striveschool-api.herokuapp.com/books")
  //response è l'oggetto della risposta
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  })

  .then((booksArr) => {
    console.log(booksArr);

    const row = document.getElementById("book-list");
    booksArr.forEach((book) => {
      //book è il riferimento ai singoli oggetti
      const col = document.createElement("div");
      col.classList.add("col");

      const card = document.createElement("div");
      col.classList.add("card");

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.alt = book.title;
      img.src = book.img;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      col.innerHTML = `
                        <div class="card">
                          <img src=${book.img} class="card-img-top" alt="${book.title}" />
                          <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">${book.price}</p>                         
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      `;

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(button);
      card.appendChild(img);
      card.appendChild();
      col.appendChild();
      row.appendChild();
    });
  });
