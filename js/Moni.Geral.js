var Moni = Moni || {};
Moni.Geral = {
		mostrarSnack: function (mensagem){
		var snack = document.getElementById("snackbar");

		snack.className = "show";
		snack.innerHTML = mensagem;
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
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