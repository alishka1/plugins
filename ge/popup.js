document.addEventListener("DOMContentLoaded", function() {
  /* your code */
	document.getElementById('button').addEventListener('click', loadUrls);
	document.getElementById('button').addEventListener('click', saveUrls);
});

function loadUrls(){
	console.log("load urls");
}

function saveUrls(){
	console.log("save urls");
}

