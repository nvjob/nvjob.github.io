$(document).ready(function() {

var get = window.location.search.replace('?','').split('&');
get = get.reduce(function(p,e){ var a = e.split('='); p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]); return p;},{});
var nameurl = get['url'];
nameurl = nameurl.replace(/^https?:\/\//,'');
nameurl = nameurl.replace(/^http?:\/\//,'');
document.getElementById('urlgen').innerHTML=('<a class="follink" href="')+get['url']+('">')+nameurl+('</a>');

});