document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("signinModal");

    // Get the button that opens the modal
    var btn = document.querySelector("nav ul:nth-child(2) li a");


    // Get the element that closes the modal
    var span = document.getElementsByClassName("close-button")[0];


    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    console.log("JavaScript file is loaded");

});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
  
    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
  

    //simple validation checks
    if (!firstName || !secondName || !email || !phone || !date) {
        alert('Please fill out all fields.');
        return; // Stops the function if any field is empty
    }
    // Display the validation message
    var validationMessage = document.getElementById('validationMessage');
    validationMessage.textContent = 'Thank you for reserving a table';
    validationMessage.style.display = 'block';


    console.log('First Name:', firstName, 'Second Name:', secondName, 'Email:', email, 'Phone:', phone, 'Date:', date);
  
    // Here you can add code to handle the form data, like sending it to a server
  });
