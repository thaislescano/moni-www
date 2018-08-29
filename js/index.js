var Moni = Moni || {};

Moni.index = {
	carregarView: function(pagina){
		if(PAGINAS[pagina] !== undefined){
			document.getElementById("corpo").innerHTML = PAGINAS[pagina];
		}
	},
	mostrarMenu: function() {
		var menu = document.getElementById("myMenu");
		var icone = document.getElementById("more");
	    if (menu.style.display === "none" || !menu.style.display) {
	    	menu.style.display="block";
	    	icone.innerHTML = "close";
	      
	    } else {
	    	menu.style.display="none";
	    	icone.innerHTML = "menu";

	    }
	},
	fazerLogin: function() {
		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";
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
		var _email = document.getElementById("emailLogin").value;
		var _senha = document.getElementById("senhaLogin").value;
		if (!validarEmail(_email) || !_senha){
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
				Moni.User = resposta.User;
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

