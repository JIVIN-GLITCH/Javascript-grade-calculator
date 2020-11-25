function calculate() {
	let english = document.getElementById("eng").value;
	let hin = document.getElementById("hin").value;
	let mat = document.getElementById("mat").value;
	let sc = document.getElementById("sc").value;
	let sst = document.getElementById("sst").value;

	//var form = document.getElementById("myForm");
	//function handleForm(event) { event.preventDefault(); } 
	//form.addEventListener('submit', handleForm);
	
	if (english === '' || hin === '' || mat === '' || sc === '' || sst === ''   ) {
		alert("Please enter all inputs.");
		return 1 
	}

	let marks_eng = parseInt(english);
	let marks_hin = parseInt(hin);
	let marks_mat = parseInt(mat);
	let marks_sc = parseInt(sc);
	let marks_sst = parseInt(sst);

	let total = marks_eng + marks_sst + marks_sc + marks_mat + marks_hin;

	let percentage = total / 5;

	let p = percentage.toString();
	/*alert(p);
	return 0;*/

	let result = 'Your Percentage is ' + p + '.'
	if (percentage > 40) {
		result += 'You have passed!'
	}

	document.getElementById('result').innerHTML = '<h3>'+result+'<h3>';
	return 1

}