// import Popper
//= ../../../node_modules/popper.js/dist/umd/popper.js

// import required js-files Bootstrap 5
//= ../../../node_modules/bootstrap/js/dist/alert.js
//= ../../../node_modules/bootstrap/js/dist/button.js
//= ../../../node_modules/bootstrap/js/dist/carousel.js
//= ../../../node_modules/bootstrap/js/dist/collapse.js
//= ../../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../../node_modules/bootstrap/js/dist/modal.js
//= ../../../node_modules/bootstrap/js/dist/popover.js
//= ../../../node_modules/bootstrap/js/dist/scrollspy.js
//= ../../../node_modules/bootstrap/js/dist/tab.js
//= ../../../node_modules/bootstrap/js/dist/toast.js
//= ../../../node_modules/bootstrap/js/dist/tooltip.js

function bruh_moment(){
	alert('this is a bruh moment')
}

function get_smiles_from_element_text(el_id){
	var inputVal = document.getElementById(el_id).value;
	let url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${inputVal}/property/CanonicalSMILES/JSON`;
	console.log(url)
	fetch(url)
	.then(res => res.json())
	.then((out) => {
	  console.log('Aye, got that dub from PubChem');
	  //console.log(out["PropertyTable"]["Properties"][0]["CanonicalSMILES"])
	  document.getElementById("inputSMILES").value = out["PropertyTable"]["Properties"][0]["CanonicalSMILES"]
	})
	.catch(err => { 
		bruh_moment()
		throw err });
}


function draw_me_like_one_of_your_french_girls(mol){
	
	mol.condense_abbreviations();
	var canvas = document.getElementById("draw-canvas-2");
	mol.draw_to_canvas(canvas, -1, -1);
}


function calculate_and_disperse(mol){
	var descrs = JSON.parse(mol.get_descriptors());
	document.getElementById('exactmw').textContent = descrs["exactmw"];
	document.getElementById('CrippenMR').textContent = descrs["CrippenMR"];
	document.getElementById('CrippenClogP').textContent = descrs["CrippenClogP"];


}

function analyse_me_senpai(smile_pwiz) {
	var smiles = document.getElementById(smile_pwiz).value;
	var mol = Module.get_mol(smiles);
	draw_me_like_one_of_your_french_girls(mol);
	calculate_and_disperse(mol);
}

