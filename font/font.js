var _config = {
	'version' : '1.22',
	'downUrl' : 'http://fontapp.23it.cc:81/font/',
	'fontList' : [
		'田英章繁体细.otf',
		'方正启体繁体.woff',
		'汉仪瘦金书繁.woff',
		'汉仪中隶书繁.woff',
		'苏新诗柳楷繁.woff',
		'腾祥伯当行楷繁-200-28-0.woff',
		'方正小篆体.woff',
		'汉仪魏碑繁.woff',
		'博洋行书7000.woff',
		'博洋欧体3500.woff',
		'博洋楷体7000.woff',
		'博洋草书7000.woff',
		'章草.woff2',
		'金文大篆.woff',
		'方正黄草简体.woff',
		'汉仪颜楷繁.woff',
		'迷你繁褚楷.woff',
		'张心启欧楷.woff',
		'劉炳森隸書.woff',
		'黄自元楷书.woff'
	]
};
serverCallBack(_config);

$(window).on('load', function(){
	var apkDownName = "shufa-" + _config.version + ".apk";
	$('#apkDown').attr('href', _config.downUrl + apkDownName);
	if($.version != "1.01" && $.version != _config.version){
		$.confirm("检测到新版本，是否进行更行？", function(flg){
			if(flg) {
				$.setDownFile(_config.downUrl, apkDownName);
			}
		});
	}
});