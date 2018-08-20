function mostrarSnack(){
	var snack = document.getElementById("snackbar");

	snack.className = "show";
	setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);


	document.getElementsByClassName("input-box")[0].value = '';
	document.getElementsByClassName("input-box")[1].value = '';
	document.getElementsByClassName("input-box")[2].value = '';
	document.getElementsByClassName("input-box")[3].value = '';

	document.getElementsByClassName("input-check")[0].checked = false;
}