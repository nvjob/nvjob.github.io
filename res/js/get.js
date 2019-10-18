/*!
 * GET URL Js 0.0.2
 * (c) 2016 - 2019 #NVJOB Nicholas Veselov https://nvjob.github.io
 * Licensed under MIT (https://nvjob.github.io/mit-license)
 */

$(document).ready(function() {

var get = window.location.search.replace('?','').split('&');
get = get.reduce(function(p,e){ var a = e.split('='); p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]); return p;},{});
var nameurl = get['url'].replace(/^https?:\/\//,'');
nameurl = nameurl.replace(/^http?:\/\//,'');
document.getElementById('urlgen').innerHTML=('<a class="follink" href="')+get['url']+('">')+nameurl+('</a>');

});