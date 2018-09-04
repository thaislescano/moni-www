var Moni = Moni || {};

Moni.Perfil = {
	displayModal: function(){
		var modal = document.getElementById('myModal');
		modal.style.display = "block";
	},
	closeModal: function(){
		var modal = document.getElementById('myModal');
		modal.style.display = "none";
	},
	mostrarPerfil: function(id){
		Moni.Geral.carregarView("perfil");
		for (var i = Moni.Monitores.length - 1; i >= 0; i--) {
			if(Moni.Monitores[i].id == id){
				id = i;
				break;
			}
		}
		document.getElementById("moniAvatar").src= "img/avatar" + Moni.Monitores[id].imagemId + ".png";
		document.getElementById("nome-perfil").innerHTML = Moni.Monitores[id].nomeCompleto;
		document.getElementById("disciplina-perfil").innerHTML = Moni.Monitores[id].disciplina;
		document.getElementById("diaHora-perfil").innerHTML = Moni.Monitores[id].diaSemana + " " + Moni.Monitores[id].horario;

		if (Moni.Monitores[id].pontosDominio || Moni.Monitores[id].pontosEmpatia || Moni.Monitores[id].pontosPontualidade){
			document.getElementById("informativo").innerHTML = "Olha! Esse monitor já possui pontos de domínio de conteúdo, empatia e pontualidade!";
		} else {
			document.getElementById("informativo").innerHTML = "Parece que você será o primeiro a avaliar!";
		}
		document.getElementById("domi_pontos_circle").innerHTML = Moni.Monitores[id].pontosDominio || "0";
		document.getElementById("emp_pontos_circle").innerHTML = Moni.Monitores[id].pontosEmpatia || "0";
		document.getElementById("pont_pontos_circle").innerHTML = Moni.Monitores[id].pontosPontualidade || "0";
	}
}