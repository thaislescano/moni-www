//js das págs registrar-monitoria, ver-monitoria, como-avaliar, sair

var Moni = Moni || {};
Moni.registro = {

	mostrarSnack: function (){
		var snack = document.getElementById("snackbar");

		snack.className = "show";
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);


		document.getElementsByClassName("input-box")[0].value = '';
		document.getElementsByClassName("input-box")[1].value = '';
		document.getElementsByClassName("input-box")[2].value = '';
	

	},
}