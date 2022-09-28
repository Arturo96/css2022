const d = document;

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const fetchData = async () => {
  const id = randomNumber(1, 151),
    URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const resp = await fetch(URL),
      data = await resp.json();

    const pokemon = {
      name: data.name,
      exp: data.base_experience,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      img: data.sprites.other.dream_world.front_default,
    };

    drawCard(pokemon);
  } catch (err) {
    console.error(err);
  }
};

const drawCard = (pokemon) => {
  const { name, exp, img, hp, attack, defense, specialAttack } = pokemon;

  const template = d.getElementById("template").content,
    clone = template.cloneNode(true),
    fragment = d.createDocumentFragment();

  clone.querySelector(".card__img").setAttribute("src", img);
  clone.querySelector(".card__author").innerHTML = `
    ${name} <span class="card__age">${hp}hp</span>
  `;

  clone.querySelector(".card__place").textContent = `${exp} exp`;
  clone.querySelector(".attack").textContent = attack;
  clone.querySelector(".special-attack").textContent = specialAttack;
  clone.querySelector(".defense").textContent = defense;

  fragment.appendChild(clone);
  d.body.appendChild(fragment);
};

d.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
