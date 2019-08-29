$(document).ready(function() {
	//cargar menu
	$(".menu_div").load("menu.html");
	//mi orden
	$(document).on("click","#mi_orden",function(){
		$(".contenido_div").load("sin_orden.html");
	})
});
