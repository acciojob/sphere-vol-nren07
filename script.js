

function volume_sphere(e) {
	e.preventDefault();
    const form=document.getElementById("MyForm");
	let r=form.radius.value;
	let v=(4*Math.PI*r**3)/3;
	v=Math.round(v*10000)/10000;
	form.volume.value=v;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
