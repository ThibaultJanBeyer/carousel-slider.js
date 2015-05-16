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
$(function(){function n(){r===!0&&(j=setInterval(function(){d.animate({marginLeft:"-="+L+a},o/2).delay(o/6).animate({marginLeft:"-="+w+a},o,function(){x++,1>x?(x=k,d.css({marginLeft:"-"+I+a})):x>k&&(x=1,d.css({marginLeft:"-"+y+a}))})},f))}function i(){clearInterval(j)}var t=100,e=100,a="vw",c="vh",o=1e3,f=5e3,r=!0,s="auto",l=$("#carousel"),d=l.find(".inner"),h=d.find(".slide"),g=l.find(".arrow"),m=l.find(".arrow.left"),u=l.find(".arrow.right"),p=l.find(".pause"),v=l.find(".play"),L=t/10,w=t-L,k=h.length,b=k-1,T=t*(k+4),y=2*t,I=(k+1)*t,x=1;l.css({width:t+a,height:e+c,position:"relative",overflow:"hidden",background:"black"}),d.css({margin:"0",marginLeft:"-"+y+a,display:"block",height:"100%",padding:0,width:T+"vw"}),h.css({width:t+a,height:e+c,overflowY:s,"float":"left"}),g.css({width:L+a,height:"100%",position:"absolute",top:"0",zIndex:"5",cursor:"pointer"}),m.css({left:"0"}),u.css({right:"0"});var z,Y=0;h.each(function(){Y++,1===Y?$(this).clone().appendTo(d):2===Y&&$(this).clone().appendTo(d),Y===b?z=$(this):Y===k&&($(this).clone().prependTo(d),z.clone().prependTo(d))});var j;m.hover(function(){i(),d.animate({marginLeft:"+="+L+a},o/4)},function(){n(),d.animate({marginLeft:"-="+L+a},o/4)}),m.click(function(){d.animate({marginLeft:"+="+t+a},o,function(){x--,1>x&&(x=k,d.css({marginLeft:"-"+(I-L)+a}))})}),u.hover(function(){i(),d.animate({marginLeft:"-="+L+a},o/4)},function(){n(),d.animate({marginLeft:"+="+L+a},o/4)}),u.click(function(){d.animate({marginLeft:"-="+t+a},o,function(){x++,x>k&&(x=1,d.css({marginLeft:"-"+(y+L)+a}))})}),p.click(function(){r=!1,i()}),v.click(function(){r=!0,n()}),n()});
