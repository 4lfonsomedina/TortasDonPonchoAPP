$(document).ready(function() {
	//cargar menu
	$(".menu_div").load("menu.html");
	//mi orden
	$(document).on("click","#mi_orden",function(){
		$(".contenido_div").load("sin_orden.html");
	})
	//ordenar
	//mi orden
	$(document).on("click","#ordenar",function(){
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
