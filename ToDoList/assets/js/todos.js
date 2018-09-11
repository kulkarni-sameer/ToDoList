$("input").keypress(function(event){
	if(event.which === 13){
		$("ul").append("<li><span>X </span>" +$("input").val() + "</li>");
		$("input").val("");
	}
});

$("ul").on("click","li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click","span", function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
})