// document.addEventListener("DOMContentLoaded", function() {
// 	document.getElementById('button').addEventListener('click', loadUrls);
// });
chrome.browserAction.onClicked.addListener(function(){	
	chrome.tabs.executeScript({file: "jquery.js"},
		function(){
			chrome.tabs.executeScript(null, {file: "popup.js"},
		);
	});
});

$(document).ready(function(){
	$('#button').on('click', loadUrls);
});

function loadUrls(){
	var newURL = "https://www.diplomtime.com/";
    chrome.tabs.create({ url: newURL });
};



// function loadUrls(){
//     chrome.tabs.update({
//     	url: "https://www.diplomtime.com/"
// 	});
//     console.log("Hello")
// };

// document.addEventListener("DOMContentLoaded", function() {
// 	document.querySelector(".js--loadorder_top").click();
// });


























// function saveUrls(){
//     console.log("ghg");
// }
// // document.getElementsByClassName("js--loadorder_top").click();
// document.querySelector(".js--loadorder_top").click();	
// console.log("ghg");


// function saveUrls(){
// 	// console.log("save urls");
// 	var newURL = "https://www.diplomtime.ru/";

//     chrome.tabs.create({ url: newURL });
// }

