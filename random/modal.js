// Get the modal element
const modal = document.getElementById("modal");

// Get the buttons that open the modal
const viewProjectButtons = document.querySelectorAll(".view-project");

// Get the <span> element that closes the modal
const closeModalButton = document.querySelector(".close-modal");

// Loop through the buttons and add a click event listener to each one
viewProjectButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
