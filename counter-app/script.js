const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");

add.addEventListener("click", () => {
  return (count.innerHTML = parseInt(count.innerHTML) + 1);
});

subtract.addEventListener("click", () => {
  return (count.innerHTML = parseInt(count.innerHTML) - 1);
});

resetCount.addEventListener("click", () => {
  return (count.innerHTML = 0);
});
