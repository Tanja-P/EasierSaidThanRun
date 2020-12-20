// // SCROLLED HEADER
window.addEventListener('scroll', function () {
   document.body.classList[
   window.scrollY > 20 ? 'add': 'remove'
  ]('scrolled');
  });

    // MOBILENAVIGATION
    function myFunction() {
        var x = document.getElementById("header");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
	  
      // COOKIEBANNER
      function closeS() {
        var x = document.getElementById("cookieBanner");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
	  
var loginUser = "tanja";
var loginPassword = "tanja";
var loginCount = 1;
var attempt = 3;
// this is what is called from the onsubmit
function checkLogin() {
	var userName = document.getElementById("userName").value;
	var passWord = document.getElementById("passWord").value;
	console.log(userName);
			console.log(passWord);
	//first check if the user is below the max number of attempts
	 if (loginCount <= attempt) {
	console.log("check nr of attempts");
		// Check if the username is correct
		if (userName != loginUser || passWord != loginPassword) {
			// make a variabel to hold the number of attempts left
			attempt--;
			console.log(attempt);
			console.log(userName);
			console.log(passWord);

			//inform the user if incorrect details
			document.getElementById("loginStatus").innerHTML = "Incorrect details. You have " + attempt + " attempts left!";
			document.getElementById("loginStatus").style.color = "red";
			
			// update the count for each failed password check
			loginCount++;

				if(attempt == 0){
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
				}
			// then return false, so that the submit action won't run
			return false;			
			 } else {
			 console.log("true");
				// if there is something in the password, return true so the submit action happens
				return true;
			}

	} else {
		// if the user is above the max changes for the password check they are locked out
		// inform the user of how its going for them
		document.getElementById("loginStatus").innerHTML = "TOO MANY ATTEMPTS!";
		// and also make it red
		document.getElementById("loginStatus").style.color = "red";
		return false;
	}
}

// var modal = document.querySelector('.modal');
// var closeButtons = document.querySelectorAll('.close-modal');
// // set open modal behaviour
// document.querySelector('.open-modal').addEventListener('click', function() {
  // modal.classList.toggle('modal-open');
  // console.log("modal open");
// });
// // set close modal behaviour
// for (i = 0; i < closeButtons.length; ++i) {
  // closeButtons[i].addEventListener('click', function() {
    // modal.classList.toggle('modal-open');
	// });
// }
// // close modal if clicked outside content area
// document.querySelector('.modal-inner').addEventListener('click', function() {
  // modal.classList.toggle('modal-open');
// });
// // prevent modal inner from closing parent when clicked
// document.querySelector('.modal-content').addEventListener('click', function(e) {
	// e.stopPropagation();
// });