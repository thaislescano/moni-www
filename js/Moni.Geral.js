var Moni = Moni || {};
Moni.Geral = {
		mostrarSnack: function (mensagem){
		var snack = document.getElementById("snackbar");

		snack.className = "show";
		snack.innerHTML = mensagem;
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
	},
}