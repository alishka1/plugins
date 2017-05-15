(function($){
var arrayPhones = {};
var ticker = 1;
var maxTickCount = 1000000;
function requrs(catid,fullCount,tik,url){
	if( ticker>maxTickCount||tik>fullCount )return 0;
	console.log('Будет спарсена страница '+tik+' категории '+catid);
	$.ajax(pageurl(tik,catid,url)).done(function (data) {
		analizeSite(data,function(){
			if(tik+1<=fullCount){
				requrs(catid,fullCount,tik+1,url);
			}
		},url);
	});
	
}
var pageurl = function(page,catid,url){
	return url+page+'&category_id='+catid+'&orderBy=1'
}
function errorHandler(e) {
		var msg = '';
		switch (e.code) {
			case FileError.QUOTA_EXCEEDED_ERR:
			msg = 'QUOTA_EXCEEDED_ERR';
			break;
			case FileError.NOT_FOUND_ERR:
			msg = 'NOT_FOUND_ERR';
			break;
			case FileError.SECURITY_ERR:
			msg = 'SECURITY_ERR';
			break;
			case FileError.INVALID_MODIFICATION_ERR:
			msg = 'INVALID_MODIFICATION_ERR';
			break;
			case FileError.INVALID_STATE_ERR:
			msg = 'INVALID_STATE_ERR';
			break;
			default:
			msg = 'Unknown Error';
			break;
		};
		console.log('Error: ' + msg);
	}
function parserGo(){
	$.ajax('https://www.skelbiu.lt/skelbimai/nekilnojamasis-turtas/').done(function (data) {
		var s = '';
		$(data).find('#categoriesDiv a').each(function(){
			s+=this.innerText+'-'+'https://www.skelbiu.lt'+$(this).attr('href')+'<br/>'
			var name = this.innerText;
			var url = 'https://www.skelbiu.lt'+$(this).attr('href');
			$.ajax(url).done(function (data) {
				if( ticker>maxTickCount )return 0;
				$last = $(data).find('#nextLink').parent().prev().find('a');
				var maxpage = parseInt($last.text());
				console.log($last.attr('href'));
				var cat = $last.attr('href').match(/([0-9]+)\?&category_id=([0-9]+)&orderBy=[0-9]+/);;
				requrs( cat[2],maxpage,1,url);
			});
		})
		$('#resultbox').html(s)
	});
}

var writed = false;
function writeBlob(){
	if(writed) return 0;
	writed = true;
	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
	window.requestFileSystem(window.PERSISTENT, 50*1024*1024 /*5MB*/, function(fsy){
		fsy.root.getFile('1.txt', {create: true}, function(fileEntry) {
			fileEntry.createWriter( function(fileWriter) {
				fileWriter.onwriteend = function(e) {
					console.log('Write completed.');
					writed = false;
				};
				fileWriter.onerror = function(e) {
					console.log('Write failed: ' + e.toString());
				};
				var bb = new window.WebKitBlobBuilder;
				for(var i in arrayPhones)
					bb.append(i+'\n');
				fileWriter.write(bb.getBlob('text/plain'));
			}, errorHandler);
	  }, errorHandler);
		
	}, function(e){alert(e)});
}
var mch = ''
function analizeSite(data,f,url){
	$(data).find('div.adsInfo a').each(function(){
		if( ticker%100==0 ){ 
			writeBlob();
			ticker++;
		}
		var dt = $.ajax({url:url+$(this).attr('href'),async:false}).responseText;
		if(mch = dt.match(/<\!--googleoff\: index-->([\+0-9]+)<!--googleon: index-->/))
			arrayPhones[mch[1]]='';
		console.log(ticker+')Cпарсена страница '+url+$(this).attr('href')+((mch&&mch.length>1)?' найденный номер '+mch[1]:''));
		ticker++;
	})
	delete data;
	if(f)f();
}
$(function(){
	$('#starter').click(parserGo);
});
})(jQuery);