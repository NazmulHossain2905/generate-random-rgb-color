// change the background color by clicking the button. And every click should be random background color.

// Step 1: Create onload handler

window.onload = function () {
  main();
};

function main() {
  // Step 3: Getting important references
  const btn = document.getElementById("btn");

  // Step 4: Button click handler
  btn.addEventListener("click", function (e) {
    const bgColor = generateRGBColor();
    document.body.style.backgroundColor = bgColor;
  });
}

// Step 2: Generate a function that should be returned RGB color. Like rgb(255,255,255).
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Step 3: Getting important references

// Step 4: Button click handler
