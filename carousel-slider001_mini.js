/*
-------------------------------------------------------------
The MIT License (MIT)

* VERSION: 0.0.1
	* DATE: 2015-05-16

	* Copyright (c) 2015, Thibault Jan Beyer
	* Website: http://www.thibaultjanbeyer.com/
	* Example: http://kit.thibaultjanbeyer.com/tools/carousel-slider/
	* Github: https://github.com/ThibaultJanBeyer/carousel-slider.js/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-------------------------------------------------------------
*/
$(function(){function n(){r===!0&&(j=setInterval(function(){l.animate({marginLeft:"-="+L+a},o/2).delay(o/6).animate({marginLeft:"-="+v+a},o,function(){b++,1>b?(b=w,l.css({marginLeft:"-"+I+a})):b>w&&(b=1,l.css({marginLeft:"-"+y+a}))})},f))}function i(){clearInterval(j)}var t=100,e=100,a="vw",c="vh",o=1e3,f=5e3,r=!0,s=$("#carousel"),l=s.find(".inner"),h=l.find(".slide"),d=s.find(".arrow"),g=s.find(".arrow.left"),m=s.find(".arrow.right"),u=s.find(".pause"),p=s.find(".play"),L=t/10,v=t-L,w=h.length,k=w-1,T=t*(w+4),y=2*t,I=(w+1)*t,b=1;s.css({width:t+a,height:e+c,position:"relative",overflow:"hidden"}),l.css({margin:"0",marginLeft:"-"+y+a,display:"block",height:"100%",padding:0,width:T+"vw"}),h.css({width:t+a,height:e+c,"float":"left"}),d.css({width:L+a,height:e+c,position:"absolute",top:"0",zIndex:"5",cursor:"pointer"}),g.css({left:"0"}),m.css({right:"0"});var x,z=0;h.each(function(){z++,1===z?$(this).clone().appendTo(l):2===z&&$(this).clone().appendTo(l),z===k?x=$(this):z===w&&($(this).clone().prependTo(l),x.clone().prependTo(l))});var j;g.hover(function(){i(),l.animate({marginLeft:"+="+L+a},o/4)},function(){n(),l.animate({marginLeft:"-="+L+a},o/4)}),g.click(function(){l.animate({marginLeft:"+="+t+a},o,function(){b--,1>b&&(b=w,l.css({marginLeft:"-"+(I-L)+a}))})}),m.hover(function(){i(),l.animate({marginLeft:"-="+L+a},o/4)},function(){n(),l.animate({marginLeft:"+="+L+a},o/4)}),m.click(function(){l.animate({marginLeft:"-="+t+a},o,function(){b++,b>w&&(b=1,l.css({marginLeft:"-"+(y+L)+a}))})}),u.click(function(){r=!1,i()}),p.click(function(){r=!0,n()}),n()});
