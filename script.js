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

    const row = document.getElementById("");
    booksArr.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");
    });
  });

// function deleteCard(a) {
//   const cardbook = a.closest(".card");
//   cardbook.remove();
// }
