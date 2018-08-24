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
		var box_domi = document.getElementById("domi-pontos");
		box_domi.innerHTML = "";

		var box_emp = document.getElementById("emp-pontos");
		box_emp.innerHTML = "";

		var box_pont = document.getElementById("pont-pontos");
		box_pont.innerHTML = "";
		/*mostrar bolinha de pontos*/
		var bola = document.createElement("div");
		var div = document.getElementsByClassName("imagem-centro-img")[0];
		bola.classList.add("ball");
		bola.innerHTML = 12;
		div.appendChild(bola);

	},
	botao1Clicado: function(){

		// botao1.classList.add("apertado");
		// setTimeout(function(){ botao1.classList.remove("apertado"); }, 3000);

		var botao1 = document.getElementById("btn1-aval");
		var domi_pontos_circle = document.getElementById("domi-pontos");

		var pontosCirculo = document.getElementsByClassName("ball")[0].innerHTML;
		var pontosVaria = document.getElementsByClassName("ball")[0];

		if (pontosCirculo > 0){;
			pontosVaria.innerHTML = pontosCirculo - 1;
			Moni.avaliar.domi_pontos += 1;
			domi_pontos_circle.innerHTML = Moni.avaliar.domi_pontos;
		} else {
			var snack = document.getElementById("snackbar-avaliacao");

			snack.className = "show";
			setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
		}
		
		
	},
	botao2Clicado: function(){
		var botao2 = document.getElementById("btn2-aval");
		var emp_pontos_circle = document.getElementById("emp-pontos");

		var pontosCirculo = document.getElementsByClassName("ball")[0].innerHTML;
		var pontosVaria = document.getElementsByClassName("ball")[0];

		if (pontosCirculo > 0){;
			pontosVaria.innerHTML = pontosCirculo - 1;
			Moni.avaliar.emp_pontos += 1;
			emp_pontos_circle.innerHTML = Moni.avaliar.emp_pontos;
		} else {
		var snack = document.getElementById("snackbar-avaliacao");

		snack.className = "show";
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
		}


	},

	botao3Clicado:function(){
		var botao3 = document.getElementById("btn3-aval");
		var pont_pontos_circle = document.getElementById("pont-pontos");

		var pontosCirculo = document.getElementsByClassName("ball")[0].innerHTML;
		var pontosVaria = document.getElementsByClassName("ball")[0];

		if (pontosCirculo > 0){;
			pontosVaria.innerHTML = pontosCirculo - 1;
			Moni.avaliar.pont_pontos += 1;
			pont_pontos_circle.innerHTML = Moni.avaliar.pont_pontos;
		} else {
		var snack = document.getElementById("snackbar-avaliacao");

		snack.className = "show";
		setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
		}

	}

}