$(document).ready(function() {


$("button").click( function() {
	console.log("clicked");
	 var name = $("#first_name").val();
	 console.log(name); 
	 var activity =$("#activity").val();
	 console.log(activity);
});
$(".hobbies").click( function() {
	console.log("hobbies")
	
	
});

$("#Softball").click(function() {
	console.log("Softball");
	$("Softball").css("font-size", "72px");
});











});