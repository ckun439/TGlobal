
function nameEnter() {
  $("thank").text("Thank you for your submission, we will get back to you shortly");
}

$("#submitbutton").on("click",nameEnter);


function displayName(){
  $("#myName").text("Jose");
}

$("myButton").on("click",displayName)
