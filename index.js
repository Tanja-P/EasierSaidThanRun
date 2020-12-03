    
    // SCROLLED HEADER
window.addEventListener('scroll', function () {
    document.body.classList[
    window.scrollY > 20 ? 'add': 'remove'
    ]('scrolled');
    });



    // MOBILNAVIGATION
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }