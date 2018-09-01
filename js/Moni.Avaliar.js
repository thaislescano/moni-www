var Moni = Moni || {};
Moni.Avaliar = {
	domi_pontos: 0,
	emp_pontos: 0,
	pont_pontos: 0,
	telaAvaliacao: function() {
		/*esconder modal*/
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
		/*remover info monitor */
		var divInfos = document.getElementsByClassName("perfil-infos")[0];
		while (divInfos.firstChild) {
  			  divInfos.removeChild(divInfos.firstChild);
		}
		/*transformar imagem em botão */
		var imgs = document.getElementsByClassName("avaliado");
		for(var i = 0; i < imgs.length; i++){
			imgs[i].classList.add("clicavel");
		}


 		/*subir div botoes */
		var divPontos = document.getElementsByClassName("pontos")[0];
		divPontos.classList.remove("pontos");
		divPontos.classList.add("pontos-avaliar");
		/*esconder botão avaliar monitor*/
		var avaliar = document.getElementById("avaliar");
		avaliar.style.display = "none";
		/*zerar pontos*/
		var box_domi = document.getElementById("domi_pontos_circle");
		box_domi.innerHTML = "";

		var box_emp = document.getElementById("emp_pontos_circle");
		box_emp.innerHTML = "";

		var box_pont = document.getElementById("pont_pontos_circle");
		box_pont.innerHTML = "";
		/*mostrar bolinha de pontos*/
		var bola = document.createElement("div");
		var div = document.getElementsByClassName("imagem-centro-img")[0];
		bola.classList.add("ball");
		bola.innerHTML = 12;
		div.appendChild(bola);

		var paragrafo = document.createElement("p");
		paragrafo.innerHTML = "Clique nos botões abaixo para avaliar domínio de conteúdo, empatia e pontualidade";
		div.appendChild(paragrafo);

		var paragrafo2 = document.createElement("p");
		paragrafo2.innerHTML = "Lembre-se que você tem 12 pontos para distribuir entre os 3 quesitos!";
		div.appendChild(paragrafo2);
		

	},
	botaoClicado: function(el){
		if(!document.getElementsByClassName("ball")[0]) return;

		var pontos_circle = document.getElementById(el.id+"_circle");
		var pontosCirculo = document.getElementsByClassName("ball")[0].innerHTML;
		var pontosVaria = document.getElementsByClassName("ball")[0];

		if (pontosCirculo > 0){;
			pontosVaria.innerHTML = pontosCirculo - 1;
			Moni.Avaliar[el.id] += 1;
			pontos_circle.innerHTML = Moni.Avaliar[el.id];
		} else {
			/*salvar dados avaliação */
			var _pontosDominio = document.getElementById("domi_pontos_circle");
			var _pontosEmpatia = document.getElementById("emp_pontos_circle");
			var _pontosPontualidade = document.getElementById("pont_pontos_circle");
			var _id;

			var modal = document.getElementById("modalLoad");
			modal.style.display = "block";

			var avaliarMonitor = { //falta id do monitor sendo avaliado
				tipo: "avaliarMonitor",
				user:{
					id: _id, //adicionar a lógica disso aqui
					pontosDominio: _pontosDominio,
					pontosEmpatia: _pontosEmpatia,
					pontosPontualidade: _pontosPontualidade
				}
			};

			SERVIDOR.chamadaGet(
			avaliarMonitor,
			function(resposta){
				if (resposta.ok) {
					modal.style.display = "none";
					Moni.Geral.mostrarSnack("Obrigado por avaliar!");
					Moni.Geral.carregarView('pesquisar');
				}
				else{
					modal.style.display = "none";
					alert("Não foi possível avaliar esse monitor!");
				}

				
			},
			function(){
				modal.style.display = "none";
				alert("Houve um erro inesperado");
			});
		}
	},

}