var Moni = Moni || {};
	
Moni.Pesquisa = {
	cardNumber: 0,
	pesquisar: function(){
		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";	

		var _inputDisciplina = document.getElementById("pesquisa").value;
		var _semestreUser = Moni.User.semestre;
		
		var pesquisar = {
			tipo: "pesquisar",
			disciplna: _inputDisciplina,
			semestre: _semestreUser
		};

		SERVIDOR.chamadaGet(
			pesquisar,
			function(resposta){
				if (resposta.ok == true){
					Moni.Monitores = resposta.monitores;
					modal.style.display = "none";
					for(var i = 0; i < resposta.monitores.length; i++){
						Moni.Pesquisa.mostrarCards(resposta.monitores[i]);
					}
				} else {
					modal.style.display = "none";
					Moni.Geral.mostrarSnack("Nenhum monitor encontrado");
				}
			},
			function(){ 
				modal.style.display = "none";
				alert("Houve um erro inesperado");
			}
		);
	},
	mostrarCards: function(monitor){
		//card
		var corpo = document.getElementById("corpo");
		var card = document.createElement("div");
		card.classList.add("info-card");
		card.classList.add("flexbox-row-around");
		card.classList.add("margin-pesquisa-card");
		corpo.appendChild(card);

		//foto
		var infoCard = document.getElementsByClassName("info-card")[Moni.Pesquisa.cardNumber];
		var imagem = document.createElement("img");
		imagem.src="img/avatar" + monitor.imagemId + ".png";
		imagem.alt="avatar do monitor";
		infoCard.appendChild(imagem);

		//info
		var divInfo = document.createElement("div");
		divInfo.classList.add("info-monitor");
		divInfo.innerHTML = "<h3 class='nome'>" + monitor.nomeCompleto + 
		"</h3><h4 class='dias'>" + monitor.diaSemana + "</h4><h4 class='horario'>" + monitor.horario + "</h4>";
		infoCard.appendChild(divInfo);

		Moni.Pesquisa.cardNumber ++;
		card.onclick = function() {Moni.Geral.carregarView('perfil')};
	}
}