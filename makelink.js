/*
 * name:    makelink
 * author:  Meena
 * version: 0.1.0
 * license: MIT
 */

 $(function($) {
 	$.fn.makelink = function(options) {
 		// default settings
 		var settings = $.extend({
 			href: null,
 			text: null,
 			target: '_self'
 		}, options);

 		//validate
 		if (settings.href == null) {
 			console.log('href option is needed');
 			return this;
 		}

 		//if no text is set by user, convert the default text to a link
 		return this.each(function() {
 			var obj = $(this);

 			if (settings.text == null) {
 				settings.text = obj.text();
 			}

 			obj.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
 		});
 	}
 }(jQuery));