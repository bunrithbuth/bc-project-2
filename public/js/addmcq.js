// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
document.getElementById("goLivePoll").addEventListener("click", event => {
    event.preventDefault();
  
    // Make a newBook object
    var newBook = {
      question: document.getElementById("mcQuestion middle-label").value,
      a: document.getElementById("mcAnswerA middle-label").value,
      b: document.getElementById("mcAnswerB middle-label").value,
      c: document.getElementById("mcAnswerC middle-label").value,
      d: document.getElementById("mcAnswerA middle-label").value
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBook)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    document.getElementById("mcQuestion middle-label").value("")
    document.getElementById("mcAnswerA middle-label").value("")
    document.getElementById("mcAnswerB middle-label").value("")
    document.getElementById("mcAnswerC middle-label").value("")
    document.getElementById("mcAnswerA middle-label").value("")
  
  });