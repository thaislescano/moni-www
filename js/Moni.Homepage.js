var Moni = Moni || {};

Moni.Homepage = {
	fazerLogin: function() {
		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";

		var _email = document.getElementById("emailLogin").value;
		var _senha = document.getElementById("senhaLogin").value;
		if (!Moni.Geral.validarEmail(_email) || !_senha){
			modal.style.display = "none";
			Moni.Geral.mostrarSnack("Email ou senha inválidos");
			return;
		}
		var LOGIN = {
			tipo: "login",
			user: {
				email: _email,
				senha: _senha
			}
		};
		SERVIDOR.chamadaGet(
		LOGIN,
		function(resposta){
			modal.style.display = "none";
			if (resposta.existe) {
				Moni.User = resposta.user;
				PAGINAS.carregarView('pesquisar');
			}
			else{
				Moni.Geral.mostrarSnack("Email ou senha errados");
			}
			
		},
		function(){
			modal.style.display = "none";
			alert("Houve um erro inesperado");
		});
	}
}

