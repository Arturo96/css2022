let listToggles = document.querySelectorAll(".menu__button--toggle");

listToggles.forEach((lt) => {
  lt.addEventListener("click", () => {
    lt.classList.toggle("arrow");

    let submenu = lt.nextElementSibling;
    let height = 0;

    if (submenu.clientHeight == 0) {
      height = submenu.scrollHeight;
    }

    submenu.style.height = `${height}px`;
  });
});
