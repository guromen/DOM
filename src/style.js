export function styles() {
  const style = document.createElement("style");
  style.textContent = `
    .field {
      display: grid;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(4, 100px);
      margin: 20% auto;
      width: max-content;
    }

    .cell {
      width: 100px;
      height: 100px;
      border: 2px solid black;
    }

    .character {
      width: 100%;
      height: 100%;
    }
  `;
  document.head.appendChild(style);
}
