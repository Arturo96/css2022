(() => {
  const d = document,
    questionsTitle = [...d.querySelectorAll(".question__title")];

  questionsTitle.forEach((qt) => {
    qt.addEventListener("click", () => {
      const questionArrow = qt.children[0],
        question = qt.parentElement.parentElement,
        answer = qt.nextElementSibling;

      questionArrow.classList.toggle("question__arrow--rotate");
      question.classList.toggle("question--pb");

      let height = 0;

      if (answer.clientHeight == 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
})();
