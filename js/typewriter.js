const typewriter = (sentence, element, delay) => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < sentence.length) {
        element.innerHTML += sentence.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);
  };
  
  const aboutMeText = "Hi, I'm ChatGPT, a large language model trained by OpenAI.";
  const aboutMeElement = document.querySelector("#about-me-text");
  typewriter(aboutMeText, aboutMeElement, 50);

// Get the modal container
var modalContainer = document.getElementById("modal-container");

// Get the close button
var closeButton = document.getElementById("close-modal");

// Get the view project buttons
var viewProjectButtons = document.querySelectorAll(".project a");

// Add click event listeners to view project buttons
viewProjectButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Prevent default link behavior
    event.preventDefault();
    // Show the modal container
    modalContainer.style.display = "block";
  });
});

// Add click event listener to close button
closeButton.addEventListener("click", function() {
  // Hide the modal container
  modalContainer.style.display = "none";
});
