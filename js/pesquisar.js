var Moni = Moni || {};

Moni.pesquisa = {
	
	mostrarCards: function(){
	//apenas um modelo
	//depois: receber input
	//buscar prof daquele input(disciplina)
	//mostrar os cards com a informação
	//cored de corda aleatoria depois?

	//card
	var corpo = document.getElementById("corpo");
	var card = document.createElement("div");
	card.classList.add("info-card");
	card.classList.add("flexbox-row-around");
	corpo.appendChild(card);

	//foto
	var infoCard = document.getElementsByClassName("info-card")[0];
	var imagem = document.createElement("img");
	imagem.src="img/dog.png";
	imagem.alt="avatar do monitor";
	infoCard.appendChild(imagem);

	//info
	var divInfo = document.createElement("div");
	divInfo.classList.add("info-monitor");
	divInfo.innerHTML = "<h3 class='nome'> Fulano de Tal Tal</h3><h4 class='dias'> Segunda</h4><h4 class='horario'> 14:00 - 16:00 </h4>"
	infoCard.appendChild(divInfo);

	card.onclick = function() {Moni.index.carregarView('perfil');};

	},
}
