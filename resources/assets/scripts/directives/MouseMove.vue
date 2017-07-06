<script>
export default {
	inserted : function(el){
		var movementStrength = 15;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$(window).on('mousemove', function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1;
			var newvalueY = height * pageY * -1;

			$(el).css('transform', "translate("+newvalueX+"px, "+newvalueY+"px)")
		});
	}
}
</script>
