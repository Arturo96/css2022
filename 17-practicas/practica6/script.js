(function () {
  const d = document,
    menu = d.getElementById("menu"),
    menuToggle = d.getElementById("menuToggle"),
    menuDropdowns = [...d.querySelectorAll(".menu__link--dropdown")];

  let isDesktop = false;

  menuDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      if (matchMedia("(max-width: 799px)").matches) {
        const submenu = dropdown.nextElementSibling,
          arrow = dropdown.children[0].children[0];
        arrow.classList.toggle("rotate");

        let height = 0;

        if (submenu.clientHeight == 0) {
          height += submenu.scrollHeight;
        }

        submenu.style.height = `${height}px`;
      }
    });
  });

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  addEventListener("resize", () => {
    if (matchMedia("(min-width: 800px)").matches && !isDesktop) {
      // console.log("Pasó de Mobile a Desktop");
      isDesktop = true;
      menuDropdowns.forEach((dropdown) => {
        const submenu = dropdown.nextElementSibling,
          arrow = dropdown.children[0].children[0];
        arrow.classList.remove("rotate");

        submenu.style.height = `auto`;
      });
    }

    if (matchMedia("(max-width: 799px)").matches && isDesktop) {
      // console.log("Pasó de Desktop a Mobile");
      isDesktop = false;
      menuDropdowns.forEach((dropdown) => {
        const submenu = dropdown.nextElementSibling,
          arrow = dropdown.children[0].children[0];
        arrow.classList.remove("rotate");

        submenu.style.height = "0";
      });
    }
  });
})();
