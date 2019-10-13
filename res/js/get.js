$(document).ready(function() {

var params = window
.location
.search
.replace('?','')
.split('&')
.reduce(
function(p,e){
var a = e.split('=');
p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
return p;
},
{}
);
var nameurl = params['url'];
nameurl = nameurl.replace(/^https?:\/\//,'');
nameurl = nameurl.replace(/^http?:\/\//,'');
document.getElementById('urlgen').innerHTML=('<a class="follink" href="')+params['url']+('">')+nameurl+('</a>');

});