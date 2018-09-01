var SERVIDOR = SERVIDOR || {
	chamadaGet: function(parametros, callback, callbackErro){
		let xhr = new XMLHttpRequest();
		var params = parametros;
		var tempo = Date.now();

		parametros = "http://localhost:8010/" + JSON.stringify(parametros);
		xhr.onload = function() {
			callback(Moni.Geral.tryParseJSON(xhr.response));
		};
		xhr.onerror = function() {
			callbackErro();
		};
		xhr.open("GET", parametros);
		xhr.send();

		function teste(){
			var resposta = {};

			if (x.tipo === "login") {
				resposta.existe = true;
				resposta.user = {
					imagemId: 0,			nomeCompleto: "Thaís Lescano",	email: "thais@hotmail.com",
					curso: "Informática",	semestre: "6",					monitor: true,
					disciplina: "ingles",	diaSemana: "segunda e quinta",	horario: "16 às 17:30",
					pontosDominio: 0,		pontosEmpatia: 0,				pontosPontualidade: 0
				}
			}
			else if (x.tipo === "criarConta") {
				resposta.ok = true;
			}
			else if (x.tipo === "pesquisar") {
				resposta.ok = true;
				resposta.monitores = [
					{imagemId:0,nomeCompleto:"João da Silva", email: "joao@hotmail.com", curso:"Informática", semestre: "6", monitor: true, disciplina:"ingles", diaSemana:"segunda e quinta", horario: "16 às 17:30", pontosDominhio:0, pontosEmpatia: 0, pontosPontualidade: 0 },
					{imagemId:1,nomeCompleto:"Maria da Silva", email: "joao@hotmail.com", curso:"Informática", semestre: "6", monitor: true, disciplina:"ingles", diaSemana:"segunda", horario: "16 às 17:30", pontosDominhio:0, pontosEmpatia: 0, pontosPontualidade: 0 }
				];
			}
			else if (x.tipo === "avaliarMonitor") {
				resposta.ok = true;
			}
			else if (x.tipo === "registrarMonitoria") {
				resposta.ok = true;
			}
			else if (x.tipo === "verMonitoria") {
				resposta.ok = true;
			}
			else if (x.tipo === "enviarEmail") {
				resposta.ok = true;
			}
			else if (x.tipo === "editarPerfil") {
				resposta.ok = true;
			}
			callback(resposta);
		}
		//setTimeout(teste,1000);
	}
}
// /***********************************************************************
// EXEMPLO
// ************************************************************************
// var EXEMPLO = { //EXEMPLO DE PARAMETROS
// 	tipo: "cardMonitor",
// 	materia:"quimica"
// }
// SERVIDOR.chamadaGet(
// EXEMPLO, //mandar as variaveis
// function(resposta){ //funcao qnd der certo
// 	alert(resposta);
// },
// function(){ //funcao qnd der errado
// 	alert("xiiii deu erro");
// });