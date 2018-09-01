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
		//
		if (!Moni.Geral.validarEmail(_emailProf)){
			modal.style.display = "none";
			Moni.Geral.mostrarSnack("Email ou senha inválidos");
			return;
		}
		
		var enviarEmail = { 
			tipo: "enviarEmail",
			emailprof: _emailProf,
			id: 0 //mandar o id do aluno que ta enviando o email
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