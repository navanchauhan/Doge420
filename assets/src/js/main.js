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
	//var canvas = document.getElementById("draw-canvas-2");
	//mol.draw_to_canvas(canvas, -1, -1);
	var dest = document.getElementById("draw-output");
	var svg = mol.get_svg();
	dest.outerHTML = "<div id='drawing-1'>" + svg + "</div>";
	document.getElementById('drawing-1').children[0].setAttribute("height", "100%");
	document.getElementById('drawing-1').children[0].setAttribute("width", "100%");
}


function calculate_and_disperse(mol){
	const shy_values_do_not_show = ["NumUnspecifiedAtomStereoCenters","NumAliphaticHeterocycles",
	"NumSaturatedHeterocycles","NumAromaticHeterocycles","NumAmideBonds","NumAromaticRings","NumAliphaticRings"
	,"NumSaturatedRings","NumSpiroAtoms","NumBridgeheadAtoms","NumAtomStereoCenters"]
	try {
		var descrs = JSON.parse(mol.get_descriptors());
	} catch(err) {
		alert("oo wee, failed to calculate descriptors senpai")
	}
	//document.getElementById('exactmw').textContent = descrs["exactmw"];
	//document.getElementById('CrippenMR').textContent = descrs["CrippenMR"];
	//document.getElementById('CrippenClogP').textContent = descrs["CrippenClogP"];
	let tableRef = document.getElementById("analyse_table");
	const keys = Object.keys(descrs);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if(shy_values_do_not_show.indexOf(key) !== -1){
        		console.log("skipping")
    		} else{
				console.log(key, descrs[key]);
				var newRow = tableRef.insertRow(-1);
			  	var newCell_label = newRow.insertCell(0);
			  	var newCell_value = newRow.insertCell(-1);
			  	var newText_label = document.createTextNode(key);
			  	var newText_value = document.createTextNode(descrs[key]);
			  	newCell_label.appendChild(newText_label);
			  	newCell_value.appendChild(newText_value);
			}
		}
	


}

function analyse_me_senpai(smile_pwiz) {
	var smiles = document.getElementById(smile_pwiz).value;
	var mol = Module.get_mol(smiles);
	draw_me_like_one_of_your_french_girls(mol);
	calculate_and_disperse(mol);
}

