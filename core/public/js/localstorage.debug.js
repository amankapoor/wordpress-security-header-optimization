function Nb(a){var c,b,d;return(c=Math,b=c.log,d=b(a)/b(1E3)|0,a/c.pow(1E3,d)).toFixed(2)+" "+(d?"kMGTPEZY"[--d]+"B":"Bytes")}function Ob(a){var c;try{c=new Blob([a],{type:"application/javascript"})}catch(b){c=new (l.BlobBuilder||l.WebKitBlobBuilder||l.B),c.append(a),c=c.getBlob("application/javascript")}return URL.createObjectURL(c)}var bb=[7,4,6,8];
function eb(a,c,b){if(a=Pb.getItem(Qb+a))try{var d=JSON.parse(a);if(d){var e=void 0!==c?c:d[4];return e&&d[3]+e<D()||!b&&null===d[5]?!1:d}}catch(f){}return!1}function Rb(a,c){var b=eb(a,!1,!0);b&&(b[3]=D(),c&&(b[9]=c),Pb.setItem(Qb+a,JSON.stringify(b)))}
function Sb(a,c,b){if("undefined"!==typeof b&&10<parseInt(b))u("localStorage","quota reached","tried to remove 10 scripts, it did not free enough space. Try localStorage.clear();",a);else{"object"===typeof c&&(c=JSON.stringify(c));try{Pb.setItem(Qb+a,c)}catch(h){if(0<=h.name.toUpperCase().indexOf("QUOTA")){var d,e,f,k=[];for(d in Pb)0===d.indexOf(Qb)&&-1===d.indexOf("chunk:")&&(f=d.split(Qb)[1],(e=eb(f))&&k.push([f,e]));k.length?(k.sort(function(a,b){return a[1][3]-b[1][3]}),u("localStorage","quota reached",
"removed",k[0][0],"for key",a),Tb(k[0][0]),E(function(){"undefined"===typeof b&&(b=0);Sb(a,c,++b)},500)):u("localStorage","quota reached","no items to remove")}else u("localStorage","error",h.name,h)}}}function Tb(a){eb(a)&&Pb.removeItem(Qb+a)}
function fb(a,c){-1===a.indexOf(na)?Fa("localStorage","external scripts not yet supported",a):Ub(function(){if(c[11]){var b=c[11];for(key in c)c.hasOwnProperty(key)&&void 0!==b[key]&&(c[key]=b[key])}var d=eb(a,c[4],!0);if(d){b=D();if(c[6]&&b<d[3]+c[6])return;null===d[5]?d[7]?c[7]&&d[7]<=c[7]&&(d=!1):d=!1:c[7]&&d[7]&&d[7]>c[7]&&(d=!1);d&&c[8]&&(c[8]={},c[8][9]=d[9],c[8][10]=d[10])}Vb++;b=parseInt(Vb);Wb[b]={};Wb[b][0]=a;Wb[b][2]=function(b){b[0]instanceof Array?1===b[0][0]?d&&(Rb(a,b[1]),null===d[5]&&
"undefined"!==typeof d[7]&&Fa("localStorage","to big ("+Nb(d[7])+")",a)):2===b[0][0]&&E(function(){var c={};c[3]=D();c[7]=b[0][1];c[5]=null;c[9]=b[1];c[10]=b[2];Sb(a,c);Fa("localStorage","to big ("+Nb(b[0][1])+")",a)},1):E(function(){var d={};d[3]=D();d[7]=b[0].length;d[4]=c[4]||Xb;d[5]=b[0];d[9]=b[1];d[10]=b[2];Sb(a,d);Fa("localStorage","saved ("+Nb(d[7])+")",a)},1)};var e={};e[0]=a;e[14]=d?1:0;e[1]=b;e[7]=c[7];e[8]=d?c[8]:0;e[9]=d?d[9]:0;e[10]=d?d[10]:0;R.postMessage(e)})}
function Ub(a){ua(function(){E(function(){if(!R){var c=function(){self.u=5E3;self.m=function(a){function b(b,d){f||(f=!0,b&&(b=[q.status,q.statusText]),c(),g&&!t&&"string"===typeof d&&(content_size=d.length,content_size>g&&(d=[2,content_size])),self.s(a,b,[d,n,r]))}function c(){4!==q.readyState&&q.abort();k&&(self.clearTimeout(k),k=!1)}var f=!1,k=!1,h=a[8],g=a[7],p=!1,n,r,t,q=new XMLHttpRequest;q.open(h?"HEAD":"GET",a[0],!0);1===a[14]&&(a[9]&&q.setRequestHeader("If-None-Match",a[9]),a[10]&&q.setRequestHeader("If-Modified-Since",
a[10]));q.onreadystatechange=function(){if(!f)if(2===q.readyState){if(!p){p=!0;n=q.getResponseHeader("ETag");r=q.getResponseHeader("Last-Modified");if(304===q.status)return b(!1,[1]);if(g&&(t=q.getResponseHeader("Content-Length"))&&(t=parseInt(t),!isNaN(t)&&t>g))return b(!1,[2,t]);if(h){var d=!0;h[9]&&n&&h[9]===n&&(d=!1);d&&h[10]&&r&&h[10]===r&&(d=!1);d?(a[8]=!1,c(),self.m(a)):b(!1,[1])}}}else 4===q.readyState&&(304===q.status?b(!1,[1]):200!==q.status?b(!0):b(!1,q.responseText))};q.onerror=function(){f||
b(!0)};k=self.setTimeout(function(){if(!f){try{q.abort()}catch(w){}b("timeout")}},self.u);q.send(null)};self.s=function(a,c,e){c?self.postMessage([2,a[1],c]):self.postMessage([1,a[1],e])};self.onmessage=function(a){a=a.data;if(a instanceof Array)for(var b=a.length,c=0;c<b;c++)"object"===typeof a[c]&&"undefined"!==typeof a[c][0]&&"undefined"!==typeof a[c][1]&&self.m(a[c]);else if("object"===typeof a&&"undefined"!==typeof a[0]&&"undefined"!==typeof a[1])self.m(a);else throw Error("Web Worker Script Loader: Invalid resource object");
}}.toString().replace(/^function\s*\(\s*\)\s*\{/,"").replace(/\}$/,""),c=Ob(c);R=new Worker(c);R.addEventListener("message",Yb);R.addEventListener("error",function(a){u(["localStorage","worker"],a)})}a()},1)})}
function Yb(a){if(R){a=a.data;var c=a[1];if("undefined"===typeof Wb[c])u("localStorage","web worker invalid response",a);else if(1===a[0])Wb[c][2](a[2]);else 2===a[0]&&(c=Wb[c][0],a[2]instanceof Array?200<a[2][0]&&600>a[2][0]&&u("localStorage","web worker error",c,a[2][0],a[2][1]):u("localStorage","web worker error",c,a))}}
if("localStorage"in l&&l.localStorage){var Pb=l.localStorage,Qb="o10n-",Xb=86400,R,Wb=[],Vb=0;l.addEventListener("beforeunload",function(){R&&(R.terminate(),R=!1)});E(function(){var a,c,b=D(),d=[];for(a in Pb)(c=a.split(Qb)[1])&&(a=eb(c))&&a[3]+a[4]<=b&&(Tb(c),d.push(c));0<d.length&&u("localStorage","cleared",d.length,"expired items")},3,function(a){setTimeout(a,2E3)})};
