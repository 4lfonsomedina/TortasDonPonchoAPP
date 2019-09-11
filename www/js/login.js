$(document).ready(function() {
	
	$("#form_registro").submit(function(e){
		e.preventDefault();
		registro();
	})
	$("#form_login").submit(function(e){
		e.preventDefault();
		inicio_session();
	})
	$("#form_renovacion").submit(function(e){
		e.preventDefault();
		renovacion();
	})


	//Funcion para borrar mensaje de error
	setTimeout(function() { $(".alerta_login").hide(200);}, 4000);


	//Function que realiza la validacion de usuario
	function inicio_session(){
		show_loader();
		$.post("https://tortasdonponcho.com/index.php/app/acceso_sesion",$("#form_login").serialize(),function(r){
			var r = r.split("|");
			if(r[0]=='0'){ //error
				alert(r[1]);
				hide_loader();
			}else{
				var us = JSON.parse(r[1]);
				window.localStorage.setItem("id_usuario", us.id_cliente);
				window.localStorage.setItem("nombre", us.nombre);
				window.localStorage.setItem("telefono", us.clave);
				window.localStorage.setItem("correo", us.correo);
				window.localStorage.setItem("clave", us.clave);
				alert(":) Bienvenido!");
				window.location.replace("index.html");
				
			}
		}).fail(function() {alert( "Verifica tu conexion, no es posible conectar con el servidor de TortasDonPoncho" );hide_loader();})
	}
	//funncion de registro
	function registro(){
		show_loader();
		$.post("https://tortasdonponcho.com/index.php/app/registro",$("#form_registro").serialize(),function(r){
			var r = r.split("|");
			if(r[0]=='0'){ //error
				alert(r[1]);
				hide_loader();
			}else{
				var us = JSON.parse(r[1]);
				window.localStorage.setItem("id_usuario", us.id_cliente);
				window.localStorage.setItem("nombre", us.nombre);
				window.localStorage.setItem("correo", us.correo);
				window.localStorage.setItem("telefono", us.clave);
				window.localStorage.setItem("clave", us.clave);
				alert("Gracias por tu registro ahora ya puedes hacer tus pedidos facil y rapido \n :) Bienvenido!");
				window.location.replace("index.html");
				
			}
			
			
		}).fail(function() {alert( "Verifica tu conexion, no es posible conectar con el servidor de TortasDonPoncho" );hide_loader();})
	}
	function renovacion(){
		show_loader();
		$.post("http://tortasdonponcho.com/index.php/app/renovacion",$("#form_renovacion").serialize(),function(r){
			var r = r.split("|");
			if(r[0]=='0'){ //error
				alert(r[1]);
				hide_loader();
			}else{
				alert("Se a enviado un correo a "+$(".input_correo").val()+" con las instrucciones de renovación de clave");
				window.location.replace("login.html");
			}
		}).fail(function() {alert( "Verifica tu conexion, no es posible conectar con el servidor de TortasDonPoncho" );hide_loader();})
	}
	//funcion loader
	function show_loader(){
		$("body").append("<div class='contenedor_loader'><img src='img/logo.png' class='imgr'></div>");
	}
	function hide_loader(){
		$(".contenedor_loader").remove();
	}

});
