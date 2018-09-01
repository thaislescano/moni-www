var PAGINAS = PAGINAS || [
    //os htmls  vão ficar aqui
    "home",
    "pesquisar",
    "criar-conta",
    "perfil",
    "registrar-monitoria",
    "ver-monitoria",
    "perfil-editar"
];
PAGINAS.loadPages = function () {
	//carregar todas as paginas de html no PAGINAS msm
	//dai PAGINAS.home vai ser o html do login e PAGINAS.pesquisar do html de pesquisar
	for (var i = 0; i < PAGINAS.length; i++) {
		let xhr = new XMLHttpRequest();
		let nomePagina = PAGINAS[i];
		let caminhoPagina = "./" + PAGINAS[i] + ".html";
		xhr.onload = function() {
            //PAGINAS[nomePagina] é a msm coisa que escrever PAGINAS.home por exemplo
            //ele n deixa de ser um vetor, mas fica com esses atributos extras (ele n contam pro PAGINAS.length)
			PAGINAS[nomePagina] = xhr.responseText;
			console.log(nomePagina + " carregado");
			if(nomePagina === "home"){
				Moni.Geral.carregarView('home');
			}
		}
		xhr.open("GET", caminhoPagina);
		xhr.send();
	}
};
PAGINAS.loadPages();