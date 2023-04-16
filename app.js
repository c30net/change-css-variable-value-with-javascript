let blur = document.getElementById("blur");
blur.addEventListener("input", handleInput);

function handleInput() {
  console.log(Object.values(document.getElementById(this.id).dataset)[0]);
  let dataDashStar = Object.values(document.getElementById(this.id).dataset)[0];
  console.log(`--${this.name}`, `${this.value}${dataDashStar}`);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${dataDashStar}`
  );
}
let spacing = document.getElementById("spacing");
spacing.addEventListener("input", handleInput);

let color = document.getElementById("color");
color.addEventListener("input", handleInput);
