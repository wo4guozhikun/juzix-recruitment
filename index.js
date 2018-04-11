$(function() {
	H5FullscreenPage.init({
		'type': 2,
		'pageShow': function(dom) {
			console.log($(dom))
			
		},
		'pageHide': function(dom) {
			//        console.log("dom2",dom);
		}
	});
})