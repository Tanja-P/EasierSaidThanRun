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
	//set user login name
var loginUser = "Tanja Pasma";
	//set login password
var loginPassword = "tanja";
//counter
var loginCount = 1;
//maximum no of attempts
var attempt = 3;

// this is what is called from the on submit
function checkLogin() {
//get the value of user name input
	var userName = document.getElementById("userName").value;
	//get the value of password input
	var passWord = document.getElementById("passWord").value;
	//first check if the user is below the maximum number of attempts
	 if (loginCount <= attempt) {
		// Check if the user name is correct
		if (userName != loginUser || passWord != loginPassword) {
			// make a variable to hold the number of attempts left
			attempt--;
			
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
				// if correct login details redirect to new page with parameter userName
				document.getElementById("login_form").action = "hackingNews.html?param=" + userName;
				//return true;				
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
		// the format of timestamp text
		let timestamp = "TANJA on" + " " + date.toLocaleTimeString("en-us", options);
		// set the timestamp as text
		let timestampText = document.createTextNode( timestamp );
		//add text to p tag
		timeStampArea.appendChild(timestampText);

		//get the timestamp id and add the timestamp text to it
		document.getElementById( "comments_timestamp" ).appendChild(timeStampArea);

		// get the comment p id and add the Comment to it
		document.getElementById( "comments_content" ).appendChild( userCommentArea );
		
		//add inline styling - top border
		document.getElementById("comments_timestamp").style.borderTop = "thin solid grey";
		// set Answer
		document.getElementById( "answer" ).innerHTML = "Answer >";
		//set no of comments
		document.getElementById("section-head").innerHTML = "2 comments";
		// delete input text after post
		document.getElementById( "messageInput" ).value = "";
	
}

function showLoginName() {
	//get the user name in url
var userNameEncoded = location.search.split("param=")[1];
//decode the user name
var userName = decodeURIComponent(userNameEncoded);
	// // create a P tag to become the login name
	let loginNameArea = document.createElement("P");
	// //set the userInput as content
	let user = document.createTextNode( userName );
	console.log(user);
	// // add that text to the P tag
	loginNameArea.appendChild( user );
	// // give the P tag a class 
	loginNameArea.classList.add( "loginNameArea" );
	// // get the login name p id and add the name to it
	document.getElementById( "account" ).appendChild( loginNameArea );
}