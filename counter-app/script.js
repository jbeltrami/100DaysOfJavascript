const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  return e.target.classList.contains("add")
    ? count.innerHTML++
    : e.target.classList.contains("subtract")
    ? count.innerHTML--
    : e.target.classList.contains("reset")
    ? (count.innerHTML = 0)
    : null;
});
