var Moni = Moni || {};
Moni.EditarPerfil = {
	checkClicado: function(checkbox){
		
		var label = document.getElementsByClassName("hidden-label");
		var inputCheck = document.getElementsByClassName("escondido");

		if(checkbox.checked == true){
			for (var i=0; i<inputCheck.length; i++){
				inputCheck[i].style.display = "block";
	        	label[i].style.display = "block";
			}
	        	
    	} else {
    		for (var i=0; i<inputCheck.length; i++){
				inputCheck[i].style.display = "none";
	        	label[i].style.display = "none";
			}
    	}


	
	},
	mostrarModalAvatar: function(){
		var modal = document.getElementsByClassName("modal")[0];
		modal.style.display = "block";
	},

	salvarEdicoes: function(){

		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";
		/*validar email */
		function validarEmail(email){
			var usuario = email.substring(0, email.indexOf("@"));
			var dominio = email.substring(email.indexOf("@")+ 1, email.length);
 
			if ((usuario.length >=1) &&
			    (dominio.length >=3) && 
			    (usuario.search("@")==-1) && 
			    (dominio.search("@")==-1) &&
			    (usuario.search(" ")==-1) && 
			    (dominio.search(" ")==-1) &&
			    (dominio.search(".")!=-1) &&      
			    (dominio.indexOf(".") >=1)&& 
			    (dominio.lastIndexOf(".") < dominio.length - 1)) {
   				 return true;
			}
			return false;
		}

		/*pegar values*/
		var _imagemId = document.getElementById("novo").id;
		var _nomeCompleto = document.getElementsByClassName('input-box')[0].value;
		var _email = document.getElementsByClassName('input-box')[1].value;
		var _curso = document.getElementsByTagName('select')[0].value
		var _semestre = document.getElementsByTagName('select')[1].value;
		var _monitor = document.getElementsByClassName("input-check")[0].checked;
		var _disciplina;
		if (_monitor == true ){
			 _disciplina = document.getElementById("disciplina").value;
			 _diaSemana = document.getElementById("diaSemana").value;
			 _horario = document.getElementById("horario").value;

		} else {
			 _disciplina = "";
			 _diaSemana ="";
			 _horario = "";
		}


		if (!validarEmail(_email)){
			modal.style.display = "none";
			Moni.Geral.mostrarSnack("Email inválido");
			return;
		}

		var editarPerfil = {
			tipo: "editarPerfil",
			user: {
				nomeCompleto: _nomeCompleto,
				email: _email,
				curso: _curso,
				semestre: _semestre,
				monitor: _monitor,
				disciplina: _disciplina,
				diaSemana: _diaSemana,
				horario: _horario
			}
		};

		SERVIDOR.chamadaGet(
		editarPerfil,
		function(resposta){
			if (resposta.ok) {
				Moni.User =  resposta.User;
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Perfil atualizado!");
				Moni.index.carregarView('pesquisar');
			}
			else{
				modal.style.display = "none";
				alert("");
			}

			
		},
		function(){
			modal.style.display = "none";
			alert("Houve um erro inesperado");
		});
		
    	/*limpar campos*/
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