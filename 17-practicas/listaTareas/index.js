const d = document;

const tareas = JSON.parse(localStorage.getItem("tareas")) || {};

let id = Date.now();

const form = d.getElementById("form"),
  fragment = d.createDocumentFragment(),
  divTareas = d.getElementById("tareas"),
  templateTareas = d.getElementById("templateTareas").content,
  templateTareasEmpty = d.getElementById("templateTareasEmpty").content;

const pintarTareas = () => {
  divTareas.innerHTML = "";

  if (!Object.values(tareas).length) {
    const clone = templateTareasEmpty.cloneNode(true);
    fragment.appendChild(clone);
  }

  Object.values(tareas).forEach((t) => {
    const clone = templateTareas.cloneNode(true),
      pathIcon = t.completed
        ? "assets/rotate-left-solid.svg"
        : "assets/circle-check-solid.svg";
    clone.querySelector(".tarea").className = t.completed
      ? "tarea alert alert-primary"
      : "tarea alert alert-warning";
    clone.querySelector("p").textContent = t.desc;
    if (t.completed) {
      clone.querySelector("p").classList.add("text-decoration-line-through");
    } else {
      clone.querySelector("p").classList.remove("text-decoration-line-through");
    }
    clone.querySelector(".check").dataset.id = t.id;
    clone.querySelector(".check").setAttribute("src", pathIcon);

    clone.querySelector(".minus").dataset.id = t.id;
    fragment.appendChild(clone);
  });

  divTareas.appendChild(fragment);

  localStorage.setItem("tareas", JSON.stringify(tareas));
};

d.addEventListener("click", ({ target }) => {
  if (target.matches(".check")) {
    tareas[target.dataset.id].completed = !tareas[target.dataset.id].completed;
    pintarTareas();
  }

  if (target.matches(".minus")) {
    delete tareas[target.dataset.id];
    pintarTareas();
  }
});

d.addEventListener("DOMContentLoaded", () => {
  pintarTareas();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = d.getElementById("input").value.trim();

    if (!input.length) return;

    const tarea = {
      id: ++id,
      desc: input,
      completed: false,
    };

    tareas[id] = { ...tarea };
    pintarTareas();
  });
});
