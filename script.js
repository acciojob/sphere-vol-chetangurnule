function volume_sphere() {
    //Write your code here
	let radius = document.querySelector("#radius").value;
	let volume = document.querySelector("#volume");
	let PI = Math.PI;
	let ans = (4*PI*radius*radius*radius)/ 3;
	document.querySelector("#volume").value = ans;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
