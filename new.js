function onoff(){
	var image = document.getElementById('dance');

	let a = parseInt(document.getElementById("num1").value);
	let b = parseInt(document.getElementById("num2").value);

	let x = a + b;

	if (x >= 100) {
		image.src = "images/2.gif";

	} else {
		image.src = "images/1.png";
	}
}

function logout() {
	let response = confirm("Are you sure u want to logout??");

	if(response){
		window.close('DANCE.html')
		window.open('index.html')
	}
}