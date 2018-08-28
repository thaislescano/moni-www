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

	infoPerfil: function(monitor){
		var monitor = quem.id;
		alert(monitor);

		Moni.index.carregarView("perfil");
	},
}