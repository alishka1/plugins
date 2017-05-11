document.addEventListener("DOMContentLoaded", function() {
  /* your code */
	document.getElementById('button').addEventListener('click', loadUrls);
	// document.getElementById('button').addEventListener('click', loadUrls);
	// document.getElementById('button').addEventListener('click', saveUrls);
});

function loadUrls(){
	// console.log("load urls");
	var newURL = "https://www.diplomtime.com/";
    chrome.tabs.create({ url: newURL });
	// document.querySelector(".js--loadorder_top").click();
	document.getElementsByClassName("js--loadorder_top").click();
}

// function saveUrls(){
// 	// console.log("save urls");
// 	var newURL = "https://www.diplomtime.ru/";

//     chrome.tabs.create({ url: newURL });
// }

