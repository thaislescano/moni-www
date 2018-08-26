var SERVIDOR = SERVIDOR || {
	chamadaGet: function(parametros, callback, callbackErro){
		let xhr = new XMLHttpRequest();
		/*var de teste*/
		var x = parametros;
		var tempo = Date.now();
		/**************/
		parametros = "http://192.168.0.103:8010/" + JSON.stringify(parametros);
		xhr.onload = function() {
			x = {};
			callback(xhr.response);
		};
		xhr.onerror = function() {
//			callbackErro();
		};
		xhr.open("GET", parametros);
		xhr.send();

		function teste(){
			var resposta = {};

			if (x.tipo === "login") {
				resposta.existe = true;
				resposta.nome = "";
				resposta.imagemId = 0;
				resposta.email = "moni@moniifms.com";
				resposta.curso = "informatica";
				resposta.semestre = 2;
				resposta.monitor = false;
				resposta.monitor = false;
				callback(resposta);
			}
			else if (x.tipo === "criarConta") {
				
			}
			else if (x.tipo === "pesquisar") {
				
			}
			else if (x.tipo === "avaliarMonitor") {
				
			}
			else if (x.tipo === "registrarMonitoria") {
				
			}
			else if (x.tipo === "verMonitoria") {
				
			}
			else if (x.tipo === "enviarEmail") {
				
			}
			else if (x.tipo === "editarPerfil") {
			}
		}
		setTimeout(teste,1000);
	}
}

/***********************************************************************
EXEMPLO
************************************************************************
var EXEMPLO = { //EXEMPLO DE PARAMETROS
	tipo: "cardMonitor",
	materia:"quimica"
}
SERVIDOR.chamadaGet(
EXEMPLO, //mandar as variaveis
function(resposta){ //funcao qnd der certo
	alert(resposta);
},
function(){ //funcao qnd der errado
	alert("xiiii deu erro");
});
************************************************************************/
