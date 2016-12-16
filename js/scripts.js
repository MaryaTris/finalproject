//animation
function accomodation(){
	$("#accomodation").slideDown(2000);
	$("#welcome").slideUp(2000);
	$("#contacts").hide(2000)
}
function home(){
	$("#accomodation").hide(2000);
	$("#welcome").show(2000);
	$("#contacts").hide(2000)
}
function contacts(){
	$("#accomodation").hide(2000);
	$("#welcome").hide(2000);
	$("#contacts").show(2000)
}
$(function () {
	$('.tlt').textillate({
		in: { effect: 'fadeInDown' },
		out: {effect: 'hinge', reverse:true},
		loop: true
	});
})

//this function is used to give the document an effect...yaani instead of popping a div
//with an id immediately, it slowly slides to it
$(document).on('click', 'a', function(event){
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
   }, 2000);
});
$(document).ready(function(){
	var roomType;
	var fname;
	var sname;
	var email;
	var phone;
	$("#rooms").click(function(event){
		event.preventDefault();
		roomType = parseInt($("#rooms").val());
	});
	$(".button").click(function(event){
		event.preventDefault();
		fname = $("input#fname").val();
		sname = $("input#sname").val();
		email = $("input#email").val();
		phone = $("input#phone").val();
		if(roomType===1){
			$("#psuitelog").append("<li>" + fname +" " + sname + " booked The Presidential suite");
			$("#psuitelog").append("<li>" + "In case You would like to talk about a release, contact the holder at" + " " + "@" + email + "</li>");
		}else if(roomType===2){
			$("#dtwinlog").append("<li>" + fname +" " + sname + " booked The Double Twin Bed Ensuite");
			$("#dtwinlog").append("<li>" + "In case You would like to talk about a release, contact the holder at" + " " + "@" + email + "</li>");
		}else if (roomType===3) {
			$("#droomlog").append("<li>" + fname +" " + sname + " booked The Double Bed Ensuite");
			$("#droomlog").append("<li>" + "In case You would like to talk about a release, contact the holder at" + " " + "@" + email + "</li>");
		}else if (roomType===4) {
			$("#sroomlog").append("<li>" + fname +" " + sname + " booked The Single Room :)");
			$("#sroomlog").append("<li>" + "In case You would like to talk about a release, contact the holder at" + " " + "@" + email + "</li>");
		}else{
			alert("Invalid Choice, Please Try Again")
		}
	});
});

/*event.preventDefault();
		var roomType = parseInt($("select#rooms").val());
		alert("You selected" + roomType);*/
