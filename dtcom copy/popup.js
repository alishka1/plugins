
// $(document).ready(function(){
// 	$('#button').on('click', loadUrls);
// });

// function loadUrls(){
// 	var newURL = "https://www.diplomtime.com/";
//     chrome.tabs.update({ url: newURL });
// };

// $(document).ready(function(){
// 	$('#button').on('click', function(){
// 		$('#body').find('.tag.invert.center.js--loadorder_top').click();
// 	});
// });


// $(document).ready(function(){
// 	$('.tag.invert.center.js--loadorder_top').click();
// });

// $(document).ready(function(){
// 	$('#button').on('click', function(){
// 		$.ajax('https://www.diplomtime.com/').done(function (data) {
// 			$(data).find('.tag.invert.center.js--loadorder_top').click();
			
// 		});
// 	});
// });


$(document).ready(function(){
	$('#button').on('click', function(){
		$.ajax({
			type: "POST",
			url: "https://www.diplomtime.com",
			success: function (data){
				alert("It was success");
				// console.log("It was success");
				$(data).find('.tag.invert.center.js--loadorder_top').click();
			}
		});
	});
});






















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

