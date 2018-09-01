var Moni = Moni || {};
Moni.Geral = {
	mostrarSnack: function (mensagem){
		var snack = document.getElementById("snackbar");

		snack.className = "show";
		snack.innerHTML = mensagem;
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
	},
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
	validarEmail: function(email){
		var usuario = email.substring(0, email.indexOf("@"));
		var dominio = email.substring(email.indexOf("@")+ 1, email.length);
		if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) &&(usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) &&      (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
			return true;
		}
		return false;
	},
	tryParseJSON: function (jsonString){
		try {
			var o = JSON.parse(jsonString);
			// Handle non-exception-throwing cases:
			// Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
			// but... JSON.parse(null) returns null, and typeof null === "object", 
			// so we must check for that, too. Thankfully, null is falsey, so this suffices:
			if (o && typeof o === "object") {
				return o;
			}
		}
		catch (e) { }
		return {ok: false, existe: false}; //se chegou aqui é pq deu erro no servidor
	}
}