const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  return e.target.classList.contains("add")
    ? (count.innerHTML++, setColor())
    : e.target.classList.contains("subtract")
    ? (count.innerHTML--, setColor())
    : e.target.classList.contains("reset")
    ? ((count.innerHTML = 0), setColor())
    : null;
});

function setColor() {
  if (count.innerHTML > 0) return (count.style.color = "yellow");
  if (count.innerHTML < 0) return (count.style.color = "orangered");

  return (count.style.color = "white");
}
