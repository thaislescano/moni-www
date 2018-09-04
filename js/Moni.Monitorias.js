var Moni = Moni || {};

Moni.Monitorias = {
	mostrarEmailModal: function(){
		var modal = document.getElementsByClassName("modal")[0];
		modal.style.display = "block";
	},
	enviarEmail: function(){
		var modal = document.getElementById("modalLoad");
			modal.style.display = "block";

		var _emailProf = document.getElementById("emailProf").value;

		//margin-registro-txt
		var blocoRegistro = document.getElementsByClassName("registrado");
		var _dataMonitoria = document.getElementsByClassName("data");
		var _nomeAluno = document.getElementsByClassName("aluno");
		var _conteudo = document.getElementsByClassName("conteudo");
		var _corpo = "";

			for(var i = 0; i < blocoRegistro.length; i++){
				_corpo +=  "Registro " + i + " - Data: " + _dataMonitoria[i].innerHTML + " Aluno: " + _nomeAluno[i].innerHTML + " conteudo: " + 
				_conteudo[i].innerHTML + " - ";
			}

		if (!Moni.Geral.validarEmail(_emailProf)){
			modal.style.display = "none";
			Moni.Geral.mostrarSnack("Email ou senha inválidos");
			return;
		}
		
		var enviarEmail = { 
			tipo: "enviarEmail",
			monitoria: {
				emailprof: _emailProf,
				idMonitor: Moni.User.id, 
				corpo: _corpo
			}
		}

		SERVIDOR.chamadaGet(
		enviarEmail, 
		function(resposta){ 
			if (resposta.ok == true){
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Email enviado!");
			} else {
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Não foi possível enviar o email :(");
			}

			var modalEmail = document.getElementsByClassName("modal")[0];
			modalEmail.style.display = "none"
		},

		function(){ 
			modal.style.display = "none";
			alert("Houve um erro inesperado");
		});

		
	},
}