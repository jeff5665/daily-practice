/*
* jRadioImage
* version: 0.0.1 (08/08/2012)
* @ jQuery v1.7.*
*
* usage as:
<form action="test.php" method="get" id="f">
	<label><input type="radio" name="test" value="1" data-imgSrc="images/bird.jpg"  /></label>
	<label><input type="radio" name="test" value="2" data-imgSrc="images/bird2.jpg" /></label>
	<label><input type="radio" name="test" value="3" data-imgSrc="images/fish.jpg" /></label>
	<input type="submit" />
</form>
<script type="text/javascript">
	$(function(){
		  $('#f').jRadioImage();
	});	
</script>
*/

(function($){
	$.fn.jRadioImage=function(o){
		var o=o||{}
		var ds=$.extend({
			onSrc:'images/on.gif',
			onClass:'img-on',
			top:'0px',
			left:'0px',
			position:'absolute'
		},o);
		
		var _img='';
		this.append('<img src="'+ds.onSrc+'" style="display:none;position:'+ds.position+';top:'+ds.top+';left:'+ds.left+'" class="img-on" />').find('input:radio').each(function(){
			_img='<img src="'+$(this).attr('data-imgSrc')+'" />';
			$(this).parent().append(_img);
			$(this).css({position:'absolute',top:'-9000px'});
		}).end().find('label').each(function(){
			$(this).click(function(){
				$(this).append($('.img-on').show());
				
			});
		});
		
	}
})(jQuery);