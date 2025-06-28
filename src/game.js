export function getRandomIndex(num) {
  let next = 0;
  do {
    next = Math.floor(Math.random() * 16);
  } while (next === num);
  return next;
}

export function createField() {
  const field = document.createElement("div");
  field.classList.add("field");

  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    field.appendChild(cell);
    cells.push(cell);
  }

  return { field, cells };
}

export function letsGame() {
  const app = document.getElementById("app");

  const { field, cells } = createField();
  app.appendChild(field);

  const img = document.createElement("img");
  img.classList = "character";
  img.src =
    "https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true";

  let position = 0;
  cells[position].appendChild(img);

  setInterval(() => {
    const next = getRandomIndex(position);
    cells[next].appendChild(img); // перемещение
    position = next;
  }, 1000);
}
