$(document).ready(function() {
	
	verificar_usuario();
	//funcion loader
	function loader(){
		return "<div class='contenedor_loader'><div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div></div>";
	}
	//cargar orden
	function cargar_orden(){
		//loader
		//post que trae las ordenes
		//validar si hay ordenes
		$(".contenido_div").load("sin_orden.html");
	}
	//mi orden
	$(document).on("click",".mi_orden",function(){
		window.location.href = "index.html";
	})
	//Pagina de ordenar
	$(document).on("click",".ordenar",function(){
		window.location.href = "crear_orden.html";
	})
	//bajar cantidad de tortas
	$(document).on("click",".ord_menos",function(){
		var input_orden=$(this).parent("div").next("div").find("input");
		input_orden.val(input_orden.val()-1);
		if(input_orden.val()<0){input_orden.val(0);}
		calculo_sub_total();
	})
	//Subir cantidad de tortas
	$(document).on("click",".ord_mas",function(){
		var input_orden=$(this).parent("div").prev("div").find("input");
		input_orden.val(input_orden.val()-0+1);
		if(input_orden.val()<0){input_orden.val(0);}
		calculo_sub_total();
	})
	//funcion para seleccionar todo el tecto de un input
	$(document).on("click",".input_orden",function(){
		$(this).select();
	})
	//Calcular subtotal de orden
	function calculo_sub_total(){
		subtot=0;
		$(".input_orden").each(function() {
			var cantidad = $(this).val();
			var precio = $(this).attr("precio");
			subtot+= cantidad*precio;
		});
		$("#sub_tot_ord").html(subtot);
	}


	////////////////////////////////////////////////     SESION     ///////////////////////////////
	//desaparecer alerta
	
	//Funcion para salir de la aplicacion
	function salir_completamente(){
		 window.localStorage.clear();
		 window.location.replace("registrate.html");
	}
	//Funcion para verificar datos de session
	function verificar_usuario(){
		show_loader();
		var correo = window.localStorage.getItem("correo");
		var clave = window.localStorage.getItem("clave");
		$.post("http://tortasdonponcho.com/index.php/app/validar_sesion",{correo:correo,clave:clave},function(r){
			if(r=='0'){window.location.href = "registrate.html"; }
			else{ hide_loader();}
		}).fail(function() {alert( "Verifica tu conexion, no es posible conectar con el servidor de TortasDonPoncho" );hide_loader();})
	}
	////////////////////////////////////////////////     LOADER     ///////////////////////////////
	//funcion loader
	function show_loader(){
		$("body").append("<div class='contenedor_loader'><img src='img/logo.png' class='imgr'></div>");
	}
	function hide_loader(){
		$(".contenedor_loader").remove();
	}
});
