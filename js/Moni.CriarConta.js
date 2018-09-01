var Moni = Moni || {};
Moni.CriarConta = {
	salvarUsuarioNovo: function(){
		var modal = document.getElementById("modalLoad");
		modal.style.display = "block";

		var _email = document.getElementById("email").value;
		var _senha = document.getElementById("senha").value;
		var _nomeCompleto = document.getElementById("nomeCompleto").value;
		var _curso = document.getElementById("curso").value;
		var _semestre = document.getElementById("semestre").value;
		var _monitor = document.getElementById("monitor").checked;
		var _disciplina, _diaSemana, _horario;
		if (_monitor == true ){
			 _disciplina = document.getElementById("disciplina").value;
			 _diaSemana = document.getElementById("diaSemana").value;
			 _horario = document.getElementById("horario").value;
		} else {
			 _disciplina = "";
			 _diaSemana ="";
			 _horario = "";
		}

		if (!Moni.Geral.validarEmail(_email)){
			modal.style.display = "none";
			Moni.Geral.mostrarSnack("Email inválido");
			return;
		}

		var criarConta = {
			tipo: "criarConta",
			user:{
				nomeCompleto: _nomeCompleto,
				senha: _senha,
				email: _email,
				curso: _curso,
				semestre: _semestre,
				monitor: _monitor,
				disciplina: _disciplina,
				diaSemana: _diaSemana,
				horario: _horario
			}	
		};

		SERVIDOR.chamadaGet(
		criarConta,
		function(resposta){
			console.log(resposta.ok);
			if (resposta.ok) {
				modal.style.display = "none";
				Moni.Geral.mostrarSnack("Sua conta foi criada!");
				Moni.Geral.carregarView('pesquisar');
			}
			else{
				modal.style.display = "none";
				alert("Email já cadastrado");
			}
		},
		function(){
			modal.style.display = "none";
			alert("Houve um erro inesperado");
		});
		/*apagar campos*/ 
		var select1 = document.getElementsByTagName('select')[0];
		var select2 = document.getElementsByTagName('select')[1];

		document.getElementsByClassName("input-box")[0].value = '';
		document.getElementsByClassName("input-box")[1].value = '';
		document.getElementsByClassName("input-box")[2].value = '';
		document.getElementsByClassName("escondido")[0].value= '';
		select1.selectedIndex = 0;
		select2.selectedIndex = 0;

		document.getElementsByClassName("input-check")[0].checked = false;
	
	},
	checkClicado: function(checkbox){
		var label = document.getElementsByClassName("hidden-label");
		var inputCheck = document.getElementsByClassName("escondido");

		if(checkbox.checked == true){
			for (var i=0; i<inputCheck.length; i++){
				inputCheck[i].style.display = "block";
	        	label[i].style.display = "block";
			}
	        	
    	} else {
    		for (var i=0; i<inputCheck.length; i++){
				inputCheck[i].style.display = "none";
	        	label[i].style.display = "none";
			}
    	}
   },
}