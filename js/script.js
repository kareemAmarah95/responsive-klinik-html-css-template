const toggleButton = document.getElementById("toggleButton");
const myElement = document.getElementById("myElement");

toggleButton.addEventListener("click", () => {
  // Check the current display style of the element
  if (myElement.style.display === "none" || myElement.style.display === "") {
    myElement.style.display = "block"; // Show the element
  } else {
    myElement.style.display = "none"; // Hide the element
  }
});
