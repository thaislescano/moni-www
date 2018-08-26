 var Moni = Moni || {};
Moni.avaliar = {
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
		divPontos.style.marginTop="20%";
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
		

	},
	botaoClicado: function(el){
		if(!document.getElementsByClassName("ball")[0]) return;

		var pontos_circle = document.getElementById(el.id+"_circle");
		var pontosCirculo = document.getElementsByClassName("ball")[0].innerHTML;
		var pontosVaria = document.getElementsByClassName("ball")[0];

		if (pontosCirculo > 0){;
			pontosVaria.innerHTML = pontosCirculo - 1;
			Moni.avaliar[el.id] += 1;
			pontos_circle.innerHTML = Moni.avaliar[el.id];
		} else {
			Moni.Geral.mostrarSnack("Obrigado por avaliar!");
		}
	},

}