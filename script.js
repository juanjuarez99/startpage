setInterval(() => {
	document.querySelector("#clock").innerText = new Date().toLocaleTimeString();
}, 1000);
