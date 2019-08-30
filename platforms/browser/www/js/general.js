$(document).ready(function() {

	//cargar orden
	function cargar_orden(){
		//loader
		//post que trae las ordenes
		//validar si hay ordenes
		$(".contenido_div").load("sin_orden.html");
	}
	//cargar menu
	$(".menu_div").load("menu.html");
	//contenido principal
	$(".contenido_div").load("sin_orden.html");
	//mi orden
	$(document).on("click",".mi_orden",function(){
		cargar_orden();
	})
	//ordenar
	//mi orden
	$(document).on("click",".ordenar",function(){
		$(".contenido_div").load("ordenar.html");
	})
	//subir 
	$(document).on("click",".ord_menos",function(){
		var input_orden=$(this).parent("div").next("div").find("input");
		input_orden.val(input_orden.val()-1);
		if(input_orden.val()<0){input_orden.val(0);}
	})
	$(document).on("click",".ord_mas",function(){
		var input_orden=$(this).parent("div").prev("div").find("input");
		input_orden.val(input_orden.val()-0+1);
		if(input_orden.val()<0){input_orden.val(0);}
	})
	$(document).on("click",".input_orden",function(){
		$(this).select();
	})
});
