// const rand = Math.floor(Math.random() * 10);

// console.log(rand);

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = (target) => {
  const randomNumber = Math.floor(Math.random() * 10);

  return (target.innerHTML = randomNumber);
};

btn.addEventListener("click", () => generateNumber(number));
