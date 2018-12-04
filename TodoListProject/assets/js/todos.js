// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// prevent event-bubbling:
	event.stopPropagation();
});

// Click enter to add typed todo to the list
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span class='close-icon'>X</span> " + todoText + "</li>");
	};
});

// Click plus icon to hide and show input string
$("#plus-icon").click(function(){
	$("input[type='text']").fadeToggle();
});