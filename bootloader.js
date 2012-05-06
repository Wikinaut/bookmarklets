/*
 * This is the unminified bootloader code for the (template) bookmarklet.
 * It includes the minified version for your convenience.
 *
 * ANS jQuery Bookmarklet launcher (v.3.0)
 * loads and executes (template).bookmarklet.js
 *
 * A Navalla Suíza (http://idc.anavallasuiza.com/project/bookmarklet/)
 * Released under the Creative Commons Attribution 3.0 Unported License,
 * as defined here: http://creativecommons.org/licenses/by/3.0/
 *
 * Embedded in (template).bookmarklet.js is (template).min.js the minified version of (template).js
 *
 * Copyright (c) 2011-2012 T. Gries
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 * This is the unminified bootloader code for the template bookmarklet.
 * In the following lines you find the minified version of it for your convenience.
 * Created with http://www.minifyjs.com/javascript-compressor/
 *
 * On your web page you can add the minified bootloader code in a link like in this example:
 * <a href="javascript:(function(b){if(window.bookmarklet==undefined||window.bookmarklet.executeMyBookmarklet==undefined){var s=document.createElement('script');s.type='text/javascript';s.src=b+'?'+Math.floor(Math.random()*99999);if(!document.attachEvent){s.onload=function(){window.bookmarklet.executeMyBookmarklet()}}else{s.onreadystatechange=function(){if(s.readyState=='complete'||s.readyState=='loaded'){window.bookmarklet.executeMyBookmarklet();s.onreadystatechange=null}}}document.body.appendChild(s)}else{window.bookmarklet.executeMyBookmarklet()}})('http://(server)/(template)/bookmarklet.js');void%200;">(template) bookmarklet</a>
 *
 * or create a bookmark in your browser with the minified bootloader code:
 * javascript:(function(b){if(window.bookmarklet==undefined||window.bookmarklet.executeMyBookmarklet==undefined){var s=document.createElement('script');s.type='text/javascript';s.src=b+'?'+Math.floor(Math.random()*99999);if(!document.attachEvent){s.onload=function(){window.bookmarklet.executeMyBookmarklet()}}else{s.onreadystatechange=function(){if(s.readyState=='complete'||s.readyState=='loaded'){window.bookmarklet.executeMyBookmarklet();s.onreadystatechange=null}}}document.body.appendChild(s)}else{window.bookmarklet.executeMyBookmarklet()}})('http://(server)/(template)/bookmarklet.js');void%200;
 *
 */

javascript:(function (b){
	if (window.bookmarklet == undefined || window.bookmarklet.executeMyBookmarklet == undefined) {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = b+'?'+Math.floor(Math.random()*99999);
		if (!document.attachEvent) {
			s.onload = function () {
				window.bookmarklet.executeMyBookmarklet();
			}
		} else {
			s.onreadystatechange = function () {
				if (s.readyState == 'complete' || s.readyState == 'loaded') {
					window.bookmarklet.executeMyBookmarklet();
					s.onreadystatechange = null;
				}
			}
		}
		document.body.appendChild(s);
	} else {
		window.bookmarklet.executeMyBookmarklet();
	}
}('http://(server)/(template)/bookmarklet.js');
void 0;
