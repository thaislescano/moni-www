var Moni = Moni || {};
Moni.criarConta = {
	mostrarSnack: function (){
		var snack = document.getElementById("snackbar");

		snack.className = "show";
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);

		var select1 = document.getElementsByTagName('select')[0];
		var select2 = document.getElementsByTagName('select')[1];


		document.getElementsByClassName("input-box")[0].value = '';
		document.getElementsByClassName("input-box")[1].value = '';
		select1.selectedIndex = 0;
		select2.selectedIndex = 0;

		document.getElementsByClassName("input-check")[0].checked = false;

	},

}