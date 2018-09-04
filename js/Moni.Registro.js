//js das págs registrar-monitoria, ver-monitoria, como-avaliar, sair

var Moni = Moni || {};
Moni.Registro = {
	btnRegistro: function(){

		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";

		var _data = document.getElementById("data").value;
		var _nomeAluno = document.getElementById("nomeAluno").value;
		var _conteudo = document.getElementById("conteudo").value;

		alert(_data + " " + _nomeAluno + " " + _conteudo);
	
		var registrarMonitoria = { //falta id do monitor sendo avaliado
			tipo: "registrarMonitoria",
			monitoria: {
				idMonitor: Moni.User.id, 
				data: _data,
				nomeAluno: _nomeAluno,
				conteudo: _conteudo
			}
		};
		
		SERVIDOR.chamadaGet(
		registrarMonitoria,
		function(resposta){
			if (resposta.ok) {
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Monitoria registrada!");
				Moni.Geral.carregarView('pesquisar');
			}
			else{
				modal.style.display = "none";
				alert("-");
			}
			
		},
		function(){
			modal.style.display = "none";
			alert("Houve um erro inesperado :(");
		});
	
	}
}