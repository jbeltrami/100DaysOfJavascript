const btn = document.querySelector(".btn"),
  result = document.querySelector(".result");

btn.addEventListener("click", isPalindrome);

function isPalindrome() {
  const word = document
    .querySelector(".input-text")
    .value.toString()
    .toLowerCase();
  const reversedWord = word.split("").reverse().join("");

  return word === reversedWord
    ? (result.innerHTML = `<h2>Yes, ${word} is a palindrome!</h2>`)
    : (result.innerHTML = `<h2>No, ${word} is not a palindrome!</h2>`);
}
