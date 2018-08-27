//js das págs registrar-monitoria, ver-monitoria, como-avaliar, sair

var Moni = Moni || {};
Moni.Registro = {
	btnRegistro: function(){

		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";

		var _data = document.getElementById("data");
		var _nomeAluno = document.getElementById("nomeAluno");
		var _conteudo = document.getElementById("conteudo");

		var avaliarMonitor = { //falta id do monitor sendo avaliado
			tipo: "avaliarMonitor",
			data: _data,
			nomeAluno: _nomeAluno,
			conteudo: _conteudo
		};
		
		SERVIDOR.chamadaGet(
		avaliarMonitor,
		function(resposta){
			if (resposta.ok) {
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Obrigado por avaliar!");
				Moni.index.carregarView('pesquisar');
			}
			else{
				modal.style.display = "none";
				alert("-");
			}

			
		},
		function(){
			modal.style.display = "none";
			alert("Houve um erro inesperado");
		});

		var registrarMonitoria = { //falta id do monitor sendo avaliado
			tipo: "registrarMonitoria",

			
			
		};
		
		SERVIDOR.chamadaGet(
		registrarMonitoria,
		function(resposta){
			if (resposta.ok) {
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Monitoria registrada!");
				Moni.index.carregarView('pesquisar');
			}
			else{
				modal.style.display = "none";
				alert("-");
			}

			
		},
		function(){
			modal.style.display = "none";
			alert("Houve um erro inesperado");
		});



	}
	
}