(() => {
  const d = document,
    busqueda = d.getElementById("busqueda"),
    form = d.getElementById("form"),
    selectPais = d.getElementById("selectPais"),
    fragment = d.createDocumentFragment(),
    cards = d.getElementById("cards"),
    darkButton = d.getElementById("darkButton"),
    templateCard = d.getElementById("templateCard").content;

  let queryCountry = "",
    queryRegion = false;

  let countries = JSON.parse(localStorage.getItem("countries")) || [],
    countriesByRegion = [];

  const filterCountries = (countries) => {
    const countriesFiltered = countries.filter((c) =>
      c.name.toLowerCase().includes(queryCountry.toLowerCase())
    );

    drawCards(countriesFiltered);
  };

  const filterCountriesByRegion = () => {
    countriesByRegion = countries.filter((c) => c.region === queryRegion);

    filterCountries(countriesByRegion);
  };

  const sortCountries = () => {
    countries = countries.map((c) => ({
      name: c.name.common,
      flag: c.flags["svg"],
      population: c.population.toLocaleString("en-US"),
      region: c.region,
      capital: c.capital ? c.capital[0] : "Sin definir",
    }));

    countries.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      // names must be equal
      return 0;
    });

    localStorage.setItem("countries", JSON.stringify(countries));

    drawCards(countries);
  };

  const drawCards = (countries) => {
    cards.innerHTML = "";

    countries.forEach((country) => {
      const clone = templateCard.cloneNode(true);
      clone.querySelector("img").setAttribute("src", country.flag);
      clone.querySelector("img").setAttribute("alt", country.name);
      clone.querySelector(".card__title").textContent = country.name;
      clone.querySelector(".population").textContent = country.population;
      clone.querySelector(".region").textContent = country.region;
      clone.querySelector(".capital").textContent = country.capital;

      fragment.appendChild(clone);
    });

    cards.appendChild(fragment);
  };

  const fetchData = async () => {
    const URL = `https://restcountries.com/v3.1/all`;

    try {
      const res = await fetch(URL);

      countries = await res.json();

      sortCountries();
    } catch (error) {
      console.error(error);
    }
  };

  d.addEventListener("DOMContentLoaded", () => {
    if (countries.length) drawCards(countries);
    else fetchData();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  busqueda.addEventListener("keyup", ({ target }) => {
    queryCountry = target.value.trim();
    if (queryRegion) filterCountries(countriesByRegion);
    else filterCountries(countries);
  });

  selectPais.addEventListener("change", ({ target }) => {
    queryRegion = target.value;
    filterCountriesByRegion();
  });

  darkButton.addEventListener("click", () => {
    d.body.classList.toggle("dark");
  });
})();
