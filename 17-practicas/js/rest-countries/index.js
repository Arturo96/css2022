(() => {
  const d = document,
    busqueda = d.getElementById("busqueda"),
    selectPais = d.getElementById("selectPais"),
    fragment = d.createDocumentFragment(),
    cards = d.getElementById("cards"),
    templateCard = d.getElementById("templateCard").content;

  let queryCountry = "",
    queryRegion = false;

  const filterCountries = (countries) => {
    const countriesFiltered = countries.filter((c) =>
      c.name.common.toLowerCase().includes(queryCountry.toLowerCase())
    );

    sortCountries(countriesFiltered);
  };

  const sortCountries = (countries) => {
    const countriesSorted = countries.map((c) => ({
      name: c.name.common,
      flag: c.flags["svg"],
      population: c.population.toLocaleString("en-US"),
      region: c.region,
      capital: c.capital ? c.capital[0] : "Sin definir",
    }));

    countriesSorted.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      // names must be equal
      return 0;
    });

    drawCards(countriesSorted);
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
    const endpoint = queryRegion ? `region/${queryRegion}` : "all";

    const URL = `https://restcountries.com/v3.1/${endpoint}`;

    try {
      const res = await fetch(URL);
      data = await res.json();

      filterCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  busqueda.addEventListener("keyup", ({ target }) => {
    queryCountry = target.value.trim();
    fetchData();
  });

  selectPais.addEventListener("change", ({ target }) => {
    queryRegion = target.value;
    fetchData();
  });
})();
