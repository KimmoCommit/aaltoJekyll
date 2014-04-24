<script>
		$(function(){
			//var mainId = 0;
			//var subId = 0;
			$(".cat-main").each(function(){
				//mainId = mainId+1;
				//$(this).attr("id","cat-main-num-"+mainId);

				var thisText = $(this).children(".cat-main-title").text();
				var thisTrimmerText = $(this).children(".cat-main-title").text().replace(/ /g, '').trim();
				$(this).attr("id",thisTrimmerText);
				//var Href="#cat-main-num-"+mainId;
				var Class="list-group-item";
				var hClass="list-group-item-heading";
				$(".toc-ul").append('<li class="' + Class +' '+ hClass +'"><a href="#' + thisTrimmerText + '"><div class="cat-title-mark"></div>' + thisText + '</a></li>');

				$(this).children().each(function(){
							//if-lause on tässä välttämätön!
							if($(this).children(".cat-sub-title").text().length > 0){
								//subId = subId + 1;
								//$(this).attr("id","cat-sub-num-"+subId);
								var thisText = $(this).children(".cat-sub-title").text();
								var thisTrimmerText = $(this).children(".cat-sub-title").text().replace(/ /g, '').trim();
								//var Href="#cat-sub-num-"+subId;
								var Class="list-group-item";
								$(this).attr("id",thisTrimmerText);
								$(".toc-ul").append('<li class="' + Class + ' cat-sub-toc"><div class="cat-title-mark"></div><a href="#' + thisTrimmerText + '" class="' + Class + '">' + thisText + '</a></li>'); 
								//alert(thisTrimmerText);
								

							}
							else {
								return;	
							}
						});
			});
});
</script>


<script>
$(function(){
	$('#toc').affix({
		offset: {
			top: 70
			, bottom: 0,//function () {
				//return (this.bottom = $('.footer').outerHeight(true))
					//}
				}
			});
});					
</script>


<script>
$(function(){
	$('body').scrollspy({ target: '#toc', offset:100 });
});
</script> 




<!--
<script>
$(function(){
	$(".toc-ul a").click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, "slow");
		return false;
	});
});

</script>
-->



<!--
<script>
$(function() {
	$(".sub-title").click(function() {
		if($(this).next("div").is(":visible")){
			$(this).next("div").slideUp("");
			$(this).children(".sub-title-mark").html('+');
			
			//$(this).next("div");
		} else {
			$(".sub-content").slideUp("");
			$(this).next("div").slideToggle("");
			//$(this).children(".sub-title-mark").replaceWith('<div class="sub-title-mark"> - </div>');
			$(this).children(".sub-title-mark").html('-');
			//alert($(this).children(".sub-title-mark").text());
			
		}
	});
});
</script>
-->
