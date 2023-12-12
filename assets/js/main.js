document.addEventListener('DOMContentLoaded', (event) => {
    // Få modalen
    var modal = document.getElementById("signinModal");

    // Få knappen som åbner modalen
    var btn = document.querySelector("nav ul:nth-child(2) li a");


    // Få elementet der lukker modalen
    var span = document.getElementsByClassName("close-button")[0];


    // Når brugeren trykker på knappen åbner modalen
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Når brugeren trykker på X lukker modalen
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Hvis bruger trykker uden for modal vinduet lukker det
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    console.log("JavaScript file is loaded");

});

document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;


    //Validation check
    if (!firstName || !secondName || !email || !phone || !date) {
        alert('Please fill out all fields.');
        return; // Stopper funktionen hvis nogen felter er tomme
    }
    // Visning af validation beskeden
    var validationMessage = document.getElementById('validationMessage');
    validationMessage.textContent = 'Thank you for reserving a table';
    validationMessage.style.display = 'block';


    console.log('First Name:', firstName, 'Second Name:', secondName, 'Email:', email, 'Phone:', phone, 'Date:', date);


});
