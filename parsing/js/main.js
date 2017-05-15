(function($){
var fs = new xdFileStorage();
function ajaxStart(){
	$('#progress').show();
}
function ajaxStop(){
	$('#progress').hide();
}
function parserGo(){
	ajaxStart();
	var url = 'http://images.yandex.ru/yandsearch?text='+encodeURIComponent('Джессика Альба')+'&rpt=image';
	var b = $.ajax(url);
	b.done(function (d) {
		analysisSite(d);
		ajaxStop();
	});
	b.fail(function (e, g, f) {
		alert('Epic Fail');
		ajaxStop();
	})
}
var res = '';
function requrs(data,index){
	res+='<img src="'+data[index].src+'"/>';
	fs.loadRemoteFile('image'+index+'.jpg',data[index].src,function(){
		if( index>0 )requrs(data,index-1);else $('#resultbox').html(res);
	});
}
function analysisSite(data){
	$imgs = $(data).find('div.b-image img');
	if( $imgs.length&&fs.fsWork() ){
		requrs($imgs,$imgs.length-1);
	}
}
$(function(){
	$('#progress').hide();
	$('#starter').click(parserGo);
});
})(jQuery);