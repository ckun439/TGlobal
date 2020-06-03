

$(document).ready(function(){

	$("#submitbutton").on("click", submitbutton);
	$("#showInfo").on("click", infoFunction);
});



function submitbutton() {
	let name = prompt("Please enter your full name (f, l)")
	let email = prompt("Please enter your email")
	let para = prompt("Why do you want to attend a think global exchange?")
	$("#submitName").text("Thank you for your submission " + name + " we will get in touch with you shortly. ");
	$("#paragraph").text("Your submission: " + para);
	$("#email").text("You will hear from us in 2-3 working days in your inbox at: " + email);
}


function infoFunction() {
  $("#information").text("Think global takes your application very seriously. We offer 30 places to join our exciting think global team for each trip therefore we have to be very selective. After filling out your email, please fill in the about me section. Add your name and a bit about yourself, why you deserve to become a part of the TG team and what you will bring to the table! Make sure to include your name! Good luck youngsters!");

}
