var Moni = Moni || {};

Moni.index = {
	carregarView: function(pagina){
		if(PAGINAS[pagina] !== undefined){
			document.getElementById("corpo").innerHTML = PAGINAS[pagina];
		}
	},
	mostrarMenu: function() {
		var menu = document.getElementById("myMenu");
	var icone = document.getElementById("more");
	    if (menu.style.display === "none" || !menu.style.display) {
	    	menu.style.display="block";
	    	icone.innerHTML = "close";
	      
	    } else {
	    	menu.style.display="none";
	    	icone.innerHTML = "menu";

	    }
	},
	
}

