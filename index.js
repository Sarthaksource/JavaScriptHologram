window.addEventListener("deviceorientation", (event) => {
	const angle = event.beta;
	const opacity = Math.min(1, Math.max(0, inv(50, 70, angle)));
	
	const imgA = document.getElementById("imgA");
	const imgB = document.getElementById("imgB");

	imgB.style.opacity = opacity;
	imgA.style.opacity = 1-opacity;
});

function inv(a, b, val)
{
	return (val-a)/(b-a);
}