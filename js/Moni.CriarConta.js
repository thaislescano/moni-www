var Moni = Moni || {};
Moni.CriarConta = {
	salvarUsuarioNovo: function(){
		Moni.Geral.mostrarSnack("Sua conta foi criada!");
		var select1 = document.getElementsByTagName('select')[0];
		var select2 = document.getElementsByTagName('select')[1];

		document.getElementsByClassName("input-box")[0].value = '';
		document.getElementsByClassName("input-box")[1].value = '';
		document.getElementsByClassName("input-box")[2].value = '';
		document.getElementsByClassName("escondido")[0].value= '';
		select1.selectedIndex = 0;
		select2.selectedIndex = 0;

		document.getElementsByClassName("input-check")[0].checked = false;
	},
	checkClicado: function(checkbox){
		
		var label = document.getElementsByClassName("hidden-label")[0];
		var inputCheck = document.getElementsByClassName("escondido")[0];
		if(checkbox.checked == true){
        	inputCheck.style.display = "block";
        	label.style.display = "block";
    	} else{
    		inputCheck.style.display = "none";
    		label.style.display = "none";
    	}
   },
	
}