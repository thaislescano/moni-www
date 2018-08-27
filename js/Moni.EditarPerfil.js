var Moni = Moni || {};
Moni.EditarPerfil = {
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
	mostrarModalAvatar: function(){
		var modal = document.getElementsByClassName("modal")[0];
		modal.style.display = "block";
	},

	salvarEdicoes: function(){

		Moni.Geral.mostrarSnack("Perfil atualizado!");

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
	closeModal: function(){
		var modal = document.getElementById('myModal');
		modal.style.display = "none";
	},
	escolhaAvatar: function(imagem){
		var imagens = document.getElementsByClassName("avatarChoice");
		for(var i = 0; i < imagens.length; i++){
				imagens[i].style.filter="";
			
		}
		imagem.style.filter = "grayscale(100%)";

		var novoAvatar = document.getElementById("novo");
		novoAvatar.src= "img/" + imagem.id + ".png";

	},
}