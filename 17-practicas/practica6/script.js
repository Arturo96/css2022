(function () {
  const d = document,
    menu = d.getElementById("menu"),
    menuToggle = d.getElementById("menuToggle"),
    menuDropdowns = [...d.querySelectorAll(".menu__link--dropdown")];

  menuDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      const submenu = dropdown.nextElementSibling,
        arrow = dropdown.children[0].children[0];

      arrow.classList.toggle("rotate");
      let height = 0;

      if (submenu.clientHeight == 0) {
        height += submenu.scrollHeight;
      }

      submenu.style.height = `${height}px`;
    });
  });

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
})();
