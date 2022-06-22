(() => {
  const d = document,
    beforeArrow = d.getElementById("beforeArrow"),
    nextArrow = d.getElementById("nextArrow"),
    comments = [...d.querySelectorAll(".comment")];

  let indexComment;

  beforeArrow.addEventListener("click", () => changePosition(-1));

  nextArrow.addEventListener("click", () => changePosition(1));

  const changePosition = (add) => {
    const currentComment = d.querySelector(".comment--show");

    currentComment.classList.remove("comment--show");

    indexComment = Number(currentComment.dataset.id) + add;

    if (indexComment === -1 || indexComment === comments.length) {
      indexComment = indexComment === -1 ? comments.length - 1 : 0;
    }

    comments[indexComment].classList.add("comment--show");
  };
})();
