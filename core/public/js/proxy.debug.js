var lb={},Yb=y[2]?y[2][6]:!1,S=y[2]?y[2][14]:!1,Zb=Yb||S?!0:!1,$b=y[3]?y[3][6]:!1,T=y[3]?y[3][14]:!1,ac=$b||T?!0:!1;function Xa(a,c,b){return Aa(a,c+"/proxy/","."+c,b)}
function bc(a){if(a&&a.nodeName){var c=a.nodeName;if(Zb&&"LINK"===c&&a.href&&a.rel&&"stylesheet"===a.rel.toLowerCase()){var c=a.href,b=!1,d,e,f;if(!(c in Ma))if(Yb&&c in Yb)d=Yb[c];else if(S)for(var h,k,g=0,p=S.length;g<p;g++)if(S[g][2]?(h=nb(S[g][0]))&&h.test(c)&&(k=!0,b=h):k=-1!==c.indexOf(S[g][0]),k){1===S[g][1]?e=!0:S[g][1]instanceof Array?f=S[g][1][0]:d=S[g][1];break}if(e)E(a,{rel:"removed","data-href":c}),a.removeAttribute("href"),d={"delete":!0},b&&(d.regex=b),c={capture:c},K("css.proxy",c,
d);else if(f)E(a,{href:f,"data-href":c}),d={A:f},b&&(d.regex=b),c={capture:c},K("css.proxy",c,d);else if(d){var n=Xa(d,"css");d={proxy:[F(n)]};b&&(d.regex=b);E(a,{href:n,"data-src":c});if(ib){E(a,{rel:"preload",as:"style"});Q[n]=a;var r,b=function(){E(a,{"data-load":1});r||(r=!0,CSS_ASYNC_LOAD(n,a.media,CSS_RENDER_POSITION?!0:!1,ib))};Oa(a.media)?(c={capture:c,async:!0},K("css.proxy",c,d),a.onload=b,sa("load",b,a)):(c={capture:c},d.responsive=a.media,K("css.proxy",c,d),Qa(a.media,b))}else c={capture:c},
K("css.proxy",c,d)}}else if(ac&&"SCRIPT"===c&&a.src){c=a.src;b=!1;if($b&&c in $b)d=$b[c];else if(T)for(g=0,p=T.length;g<p;g++)if(T[g][2]?(h=nb(T[g][0]))&&h.test(c)&&(k=!0,b=h):k=-1!==c.indexOf(T[g][0]),k){1===T[g][1]?e=!0:T[g][1]instanceof Array?f=T[g][1][0]:d=T[g][1];break}e?(E(a,{"data-removed":"1","data-src":c}),a.removeAttribute("src"),d={"delete":!0},b&&(d.regex=b),c={capture:c},K("js.proxy",c,d)):f?(E(a,{src:f,"data-src":c}),d={A:f},b&&(d.regex=b),c={capture:c},K("js.proxy",c,d)):d&&(a.src=
Xa(d,"js"),d={proxy:[F(a.src)]},b&&(d.regex=b),c={capture:c},K("js.proxy",c,d))}}return a}
if(Zb||ac){var lb=y[6]&&y[6][0]?y[6][0]:{},cc={},dc={},U={Element:"undefined"!==typeof Element?Element:!1,Document:"undefined"!==typeof Document?Document:!1},Y;for(Y in U)U.hasOwnProperty(Y)&&U[Y]&&(cc[Y]=U[Y].prototype.appendChild,dc[Y]=U[Y].prototype.insertBefore);for(Y in U)U.hasOwnProperty(Y)&&U[Y]&&function(a,c){c.prototype.appendChild=function(b){b=bc(b);return cc[a].call(this,b)};c.prototype.insertBefore=function(b,c){var d;d=bc(b);return dc[a].call(this,d,c)}}(Y,U[Y])};
