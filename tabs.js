
// function pour l'auto appel 

(function () {
	
	var afficherOnglet = function(e) {
		var li = e.parentNode;
		var div = e.parentNode.parentNode.parentNode;
		if(li.classList.contains('active'))
			return false;
	
		// on retire la class active de l'onglet actif
		div.querySelector('.tabs .active').classList.remove('active');
		// j'ajoute la class active a l'onglet actuel
		li.classList.add('active');


		//On retire la class active sur le contenu actif
		div.querySelector('.tabs-content .active').classList.remove('active');
		//j'ajoute la class active sur le contenu correspondant
		div.querySelector(e.getAttribute('href')).classList.add('active');
	}

	var tabs = document.querySelectorAll('.tabs a')

	for (var i = 0; i < tabs.length; i++) {
		// Lorsque l'on clique sur un onglet
		tabs[i].addEventListener('click', function(e) {
			afficherOnglet(this);
		})	
	}


	// taper url a la main
	var hash = window.location.hash

	var a = document.querySelector("a[href='" + hash + "']")

	if (a !== null && !(a.parentNode.classList.contains('active'))) {
		afficherOnglet(a);
	}


})()
	

