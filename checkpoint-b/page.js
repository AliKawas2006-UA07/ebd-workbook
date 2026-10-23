
import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");
  element.innerHTML = "";

  list.forEach((item) => {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = item.name;
    element.append(row);
  });
}

export function matching() {
  return items.filter((item) => item.category === "bags");
}

export function start() {
  renderItems(items);

  document
    .querySelector("#filter-button")
    .addEventListener("click", () => {
      renderItems(matching());
    });
}


