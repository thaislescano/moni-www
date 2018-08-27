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