// THE JAVASCRIPT
    function displayModal(id) {
        document.getElementById(id).style.display = "none";
        }

    function displayModal(id, src, desc) {
        document.getElementById(id).style.display = "block";
        document.getElementById("desc").innerHTML = desc;
        }

    function closeModal(id) {
    document.getElementById(id).style.display = "none";
    }