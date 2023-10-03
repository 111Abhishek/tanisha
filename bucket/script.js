
$(document).ready(function(){
	// variablen
	var error = "Please type something in the input field in order to add it to your list.";
	var noItems = "No entries found";
	var animTime = 300;
	//
	// submit button > neuen eintrag hinzufügen
	$("input[type='submit']").on("click", function(){
		var newText = $("input[type='text']").val();
		$("ol.to-do").append("<li>" + newText + "<span class='delete'></span><span class='check'></span></li>");
		$("input[type='text']").val("");
	});
	//
	// .check button > element verschieben
	$(document).on("click", ".check", function(){
		$(this).parent().fadeOut(animTime, function(){
			var checkedItem = $(this).fadeIn(animTime);
			$("ol.done").append(checkedItem);
		});
		
	});
	//
	// .delete button > element entfernen
	$(document).on("click", ".delete", function(){
		$(this).parent().fadeOut(animTime);
	});
	//

	/* not working yet:
	if($("ol.done").is(":empty")){
		console.log("append done");
		$("ol.done").append("<p>" + noItems + "</p>");
	}
	*/
});