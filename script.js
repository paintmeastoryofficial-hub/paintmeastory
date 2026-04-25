const colors = document.querySelectorAll(".color");
const topSection = document.getElementById("topSection");
const bottomSection = document.getElementById("bottomSection");

colors.forEach(color => {
  color.addEventListener("click", () => {
    const selected = color.getAttribute("data-color");

    // Change top background
    topSection.style.background = selected;

    // Create lighter shade for bottom
    bottomSection.style.background = lightenColor(selected, 60);
  });
});

// Function to lighten color
function lightenColor(hex, percent) {
  let num = parseInt(hex.replace("#",""),16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;

  return "#" + (
    0x1000000 +
    (R<255?R:255)*0x10000 +
    (G<255?G:255)*0x100 +
    (B<255?B:255)
  ).toString(16).slice(1);
}