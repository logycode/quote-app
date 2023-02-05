const state = [
  {
    quote:
      "The world belongs to those who set out to conquer it armed with self-confidence and good humour",
    author: "Charles Dickens",
  },
];

function render() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  for (element of state) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    ul.appendChild(li);
    li.innerText = element.quote;
    li.appendChild(span);
    span.innerText = " – " + element.author;
  }
}

function callApi() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => state.push(data));
}

document.addEventListener("DOMContentLoaded", (event) => {
  callApi();
  render();
});

document.querySelector("button").addEventListener("click", (event) => {
  callApi();
  render();
});
