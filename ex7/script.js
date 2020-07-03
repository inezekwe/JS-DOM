// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

document.addEventListener("DOMContentLoaded", function() {

    var header = document.getElementById('section-header');

    header.addEventListener('click', sectDisappear);
    
    function sectDisappear() {
        var sect = document.getElementById('section');
        
        if(sect.style.display == "block") {
            sect.style.display = "none";
        }
        else {
            sect.style.display = "block";
        }
    }
})
