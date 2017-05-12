chrome.browserAction.onClicked.addListener(function(){	
	chrome.tabs.executeScript({file: "jquery.js"},
		function(){
			chrome.tabs.executeScript(null, {file: "script.js"},
		);
	});
});






























// -----------------------------------
// chrome.browserAction.onClicked.addListener(function(){	
// 	chrome.tabs.executeScript(null, {
// 		code: "document.body.style.background = 'green';"
// 	});
// });
// ___________________
// chrome.browserAction.onClicked.addListener(function(){	
// 	chrome.tabs.create({url: 'http://google.com'});
// });

// _________________________
// chrome.tabs.create({url: 'http://google.com'}, callback);

// function callback(data) {
// 	console.log(data.url);
// }
// ___________