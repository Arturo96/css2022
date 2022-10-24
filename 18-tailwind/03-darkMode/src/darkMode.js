(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const btnDark = document.getElementById("btnDark");

  btnDark.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  });
})();
