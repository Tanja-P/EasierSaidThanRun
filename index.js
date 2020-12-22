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
	  
	  
	// LOGIN
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
function postComment() {
	// create a P tag to become the comment
	let userCommentArea = document.createElement("P");
	
	// Get the "userInput" from the form 
	let userComment = document.getElementById( "messageInput" ).value;
	
	//set the userInput as content
	let userText = document.createTextNode( userComment );
	
	// add that text to the P tag
	userCommentArea.appendChild( userText );
	// give the P tag a class 
	userCommentArea.classList.add( "userCommentArea" );
	
	// get the current timestamp in right format
	let date = new Date();  
	let options = {  
		weekday: "long", year: "numeric", month: "short",  
		day: "numeric", hour: "2-digit", minute: "2-digit"  
	};  
	
	// create p tag for timestamp text
		let timeStampArea = document.createElement("P");

	// document.getElementById( "comments_timestamp" ).innerHTML = "TANJA on" + " " + date.toLocaleTimeString("en-us", options);
		let timestamp = "TANJA on" + " " + date.toLocaleTimeString("en-us", options);
		// set the timestamp as text
		let timestampText = document.createTextNode( timestamp );
		//add text to p tag
		timeStampArea.appendChild(timestampText);

		//get the timestamp id and add the timestamp text to it
	document.getElementById( "comments_timestamp" ).appendChild(timeStampArea);

	// get the comment p id and add the Comment to it
	document.getElementById( "comments_content" ).appendChild( userCommentArea );
	// set Answer
	document.getElementById( "answer" ).innerHTML = "Answer >";
	// delete input text after post
	document.getElementById( "messageInput" ).value = "";
	
}


var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
			var elementsToShow = document.querySelectorAll('.show-on-scroll');
			
function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
});
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