$(document).ready(function() {
	console.log("The document is ready!");

	$('.light').on('click', function(){
		$('body').css("background","url('img/tileable_wood_texture.png') repeat" );
	});
	$('.dark').on('click', function(){
		$('body').css("background","url('img/dark_wood.png') repeat" );
	});
	$('.forest').on('click', function(){
		$('body').css({"background": "url('img/forest.jpg')", "background-size": "cover"});
	});



	$('.low').on('click', function(){
		tinysort('article',{attr:'data-price'});
	});
	$('.high').on('click', function(){
		tinysort('article',{attr:'data-price', order:'desc'});
	});
});
