

function volume_sphere() {
    let radiusEle=document.getElementById("radius");
	let volEle=document.getElementById("volume")
	let r=radiusEle.value;
	let volume=(4*r*r*r)/3;
	volEle.value=volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
