import articulos from "./articulos.js";

(() => {
  const d = document;

  const articulosSize = Object.values(articulos).length;

  const main = d.getElementById("main"),
    articleTemplate = d.getElementById("articleTemplate").content,
    fragment = d.createDocumentFragment();

  let idArticle = 0;

  const prev = () => {
    idArticle--;
  };

  const next = () => {
    idArticle++;
  };

  const drawArticle = () => {
    const clone = articleTemplate.cloneNode(true);
    clone.querySelector(".main__title").textContent =
      articulos[idArticle].title;
    clone.querySelector(".main__text").textContent = articulos[idArticle].text;

    fragment.appendChild(clone);
    main.innerHTML = "";
    main.appendChild(fragment);
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(".arrow")) {
      e.preventDefault();

      e.target.matches("#prevArticle") ? prev() : next();

      if (idArticle === -1) idArticle = articulosSize - 1;
      if (idArticle === articulosSize) idArticle = 0;

      console.log(idArticle);

      drawArticle();
    }
  });
})();
