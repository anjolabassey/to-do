
var lists= $("#list");


var inputValue = $("#newInput").val();

$("#add").on("click", function() {
	if (inputValue == "") {
		alert("Add something to your list");
	}
	else {
		lists.after("<li>" + inputValue + "</li>");
	}
	
});


$("li").on("click", function() {
	$(this).toggleClass("markDone");
});