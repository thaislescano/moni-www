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
				// if(x.email === "thais@hotmail.com" && x.senha === "123"){
					resposta.existe = true;
					resposta.nome = "Thais";
					resposta.imagemId = 0;
					resposta.email = "thais@hotmail.com";
					resposta.curso = "informatica";
					resposta.semestre = 6;
					resposta.monitor = false;
					resposta.disciplina = false;
			//}
				//else{
				//	resposta.existe = false;
			//	}
				
				
			}
			else if (x.tipo === "criarConta") {
				resposta.ok = true;
			}
			else if (x.tipo === "pesquisar") {
								
			}
			else if (x.tipo === "avaliarMonitor") {
				resposta.ok = true;
			}
			else if (x.tipo === "registrarMonitoria") {
				resposta.ok = true;
			}
			else if (x.tipo === "verMonitoria") {
				
			}
			else if (x.tipo === "enviarEmail") {
				
			}
			else if (x.tipo === "editarPerfil") {
				resposta.ok = true;
			}
			callback(resposta);
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
