function askQuestions() {


var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is your last name?');
var fullName = firstName + ' ' + lastName;

console. log(fullName);



if (firstName.roLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly');

 {
	console. log('Welcome General');
}


// When the page has loaded
$(function () {

   // When the user clicks an H3
   $('h3') .on('click', function () {
;
   // Toggle the next element
   $(this) .next() .slideToggle(250);
});

});
}

// When the page has loaded
$(function () 
{
	// When the user clicks the image - ask questions
	$( 'img') .on('click', askQuestions);
}