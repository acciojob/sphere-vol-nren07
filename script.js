

function volume_sphere(e) {
	e.preventDefault();
    const form=document.getElementById("MyForm");
	let r=form.radius.value;
	form.volume.value=(4*Math.PI*r**3)/3;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
