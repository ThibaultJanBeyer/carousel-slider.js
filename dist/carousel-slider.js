$(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* Extra Swipe Plugin: jquery.detectSwipe v2.1.1 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad and Android * http://github.com/marcandre/detect_swipe * Based on touchwipe by Andreas Waltl, netCU Internetagentur (http://www.netcu.de)  */
	function onTouchEnd(){this.removeEventListener("touchmove",onTouchMove),this.removeEventListener("touchend",onTouchEnd),isMoving=!1}function onTouchMove(t){if($.detectSwipe.preventDefault&&t.preventDefault(),isMoving){var e,n=t.touches[0].pageX,o=t.touches[0].pageY,s=startX-n,i=startY-o;Math.abs(s)>=$.detectSwipe.threshold?e=s>0?"left":"right":Math.abs(i)>=$.detectSwipe.threshold&&(e=i>0?"down":"up"),e&&(onTouchEnd.call(this),$(this).trigger("swipe",e).trigger("swipe"+e))}}function onTouchStart(t){1==t.touches.length&&(startX=t.touches[0].pageX,startY=t.touches[0].pageY,isMoving=!0,this.addEventListener("touchmove",onTouchMove,!1),this.addEventListener("touchend",onTouchEnd,!1))}function setup(){this.addEventListener&&this.addEventListener("touchstart",onTouchStart,!1)}function teardown(){this.removeEventListener("touchstart",onTouchStart)}$.detectSwipe={version:"2.1.1",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,threshold:20};var startX,startY,isMoving=!1,startTime,elapsedTime;$.event.special.swipe={setup:setup},$.each(["left","up","down","right"],function(){$.event.special["swipe"+this]={setup:function(){$(this).on("swipe",$.noop)}}});
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* -------------------------------------------------------------
	The MIT License (MIT)

		* VERSION: 0.1.1
		* DATE: 2015-11-24
	
	Added v000-010 2015-05-18-2015-06-20:
	+ A new more comprehensible Website for the slider with better docs – understanding the slider made easy
	+ Better function – now everything is based on the size values set in html via data-width and data-height which resolves bugs on the one side and allows user to have different units for every slider and even change values an units afterhand which makes the slider much more flexible
	+ Key Funktions within slider
	+ Slider within Slider
	+ w3c friendly
	+ You can now have multiple totally different sliders on one page (todo: slider inside of slider)
	+ Sizes are set directly in html
	+ Swipe Gestures (now built in with modified jquery.detectSwipe v2.1.1)
	+ Cleaner Animation
	
	* Copyright (c) 2015, Thibault Jan Beyer
	* Website: http://www.thibaultjanbeyer.com/
	* Example: http://kit.thibaultjanbeyer.com/tools/carousel-slider.js/
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
	------------------------------------------------------------- */
	/*
	-------------------------------------------------------------
	Only change the following code if you know what you're doing.
	-------------------------------------------------------------
	*/
	// Setup
	var $cl = [],
		$clInner = [],
		$clSlides = [],
		$clSlidesContent = [],
		$clArrows = [],
		$clArrowLeft = [],
		$clArrowRight = [],
		clArrowSize = [],
		$clPauseAutoPlay = [],
		$clPlayAutoPlay = [],
		$clAttrWidth = [],
		$clAttrHeight = [],
		clAutoPlay = [],
		clSpeed = [],
		clTime = [],
		clOverflow = [],
		clSwiping = [],
		clWidth = [],
		clMove = [],
		clMoveFull = [],
		clSlidesNum = [],
		clSlidesTotal = [],
		clSlidesNumBefore = [],
		clInnerWidth = [],
		clFirstPos = [],
		clLastPos = [],
		clSlidePos = [],
		interval = [],
		clSliding = [],
		clLeftHover = [],
		clLeftHoverLeave = [],
		clRightHover = [],
		clRightHoverLeave = [];

	$('.carousel-slider').each(function(i, el) {
		// Find your stuff
		$cl[i] = $(this);
		$clInner[i] = $cl[i].children('.inner');
		$clSlides[i] = $clInner[i].children('.slide');
		$clSlidesContent[i] = $clSlides[i].children('.content');
		$clArrows[i] = $cl[i].children('.arrow');
		$clArrowLeft[i] = $cl[i].children('.arrow.left');
		$clArrowRight[i] = $cl[i].children('.arrow.right');
		$clPlayAutoPlay[i] = $cl[i].children('.play');
		$clPauseAutoPlay[i] = $cl[i].children('.pause');
		// Now we set up the starting CSS relative to the chosen Options
		$clAttrWidth[i] = $cl[i].attr('data-width');
		$clAttrHeight[i] = $cl[i].attr('data-height');
		//checking the custom user options in the attributes
		if ($cl[i].attr('data-autoplay')) {
			clAutoPlay[i] = JSON.parse($cl[i].attr('data-autoplay'));
		} else {
			clAutoPlay[i] = true;
		};
		if ($cl[i].attr('data-speed')) {
			clSpeed[i] = parseInt($cl[i].attr('data-speed'));
		} else {
			clSpeed[i] = 1000;
		};
		if ($cl[i].attr('data-time')) {
			clTime[i] = parseInt($cl[i].attr('data-time'));
		} else {
			clTime[i] = 7000;
		};
		if ($cl[i].attr('data-overflow')) {
			clOverflow[i] = $cl[i].attr('data-overflow');
		} else {
			clOverflow[i] = 'auto';
		};
		if ($cl[i].attr('data-swipe')) {
			clSwiping[i] = JSON.parse($cl[i].attr('data-swipe'));
		} else {
			clSwiping[i] = true;
		};
		// Styling the clSlider
		$cl[i].css({
			width: $clAttrWidth[i],
			height: $clAttrHeight[i],
			position: 'relative',
			overflow: 'hidden',
		});
		$cl[i].attr("tabindex","0");
		// We begin by checking how many slides there are
		clSlidesNum[i] = $clSlides[i].length;//3
		// Note that the slider will only work if there are more than one slides inside.
		// We also want to define the slide before the last
		clSlidesNumBefore[i] = clSlidesNum[i] - 1;//2 in this case
		//setting the num of total slides
		clSlidesTotal[i] = clSlidesNum[i]+4;
		// And defining the width of all slides together:
		clInnerWidth[i] = 100*clSlidesTotal[i];
		// Now we set up the starting Positions of the first and the last slide.
		// Since we will add 2 Before first and 2 after last there is some calculation to be done.
		clWidth[i] = 100 / clSlidesTotal[i];
		clFirstPos[i] = 200;
		clLastPos[i] = (clSlidesNum[i]+1)*100;
		// Lastly we set the slide where to start (we want to start at slide 1)
		clSlidePos[i] = 1;
		// we continue setting the css
		$clInner[i].css({
			margin: '0',
			marginLeft: "-"+clFirstPos[i]+'%',
			display: 'block',
			height: '100%',	
			padding: '0',
			width:clInnerWidth[i]+'%'
		});
		$clSlides[i].css({
			width: clWidth[i]+'%',
			height: '100%',
			overflowY: clOverflow[i],
			float: 'left',
		});
		// Move Options
		// cheap option to make a % value responsive based on the actual slide size in px since % is broken:
		// 5% is not enough below 400px and too much over 1000px
		// need a better way since screens over 4000px res will appear
		// could not be tested if nice over 2000px
		// no idea yet for a better systhem, feel free to send me a request if you have one
		if ($clSlides[i].width() <= 200) { clMove[i] = 20; clArrowSize[i] = 20;} // if its below 200px we need a bigger %
		else if ($clSlides[i].width() <= 400) { clMove[i] = 12; clArrowSize[i] = 35;}
		else if ($clSlides[i].width() >= 1000) { clMove[i] = 4; clArrowSize[i] = 50;}
		else if ($clSlides[i].width() >= 2000) { clMove[i] = 3; clArrowSize[i] = 55;} // if over 2000px we need less %
		else if ($clSlides[i].width() >= 3000) { clMove[i] = 2; clArrowSize[i] = 65;}
		else if ($clSlides[i].width() >= 4000) { clMove[i] = 1; clArrowSize[i] = 65;}
		else if ($clSlides[i].width() >= 5000) { clMove[i] = 0.5; clArrowSize[i] = 70;}
		else { clMove[i] = 5; clArrowSize[i] = 45;}
		clMoveFull[i] = 100 - clMove[i]; // sets the full movement based on actual rate
		// Set movement arrows
		$clArrows[i].css({
			width: clArrowSize[i]+'px',
			height: '100%',
			position: 'absolute',
			top: '0',
			zIndex: '5',
			cursor: 'pointer',
			textAlign: 'center'
		});
		$clArrowLeft[i].css({
			left: '0'
		});
		$clArrowRight[i].css({
			right: '0'
		});
		$clPlayAutoPlay[i].css({
			position: 'absolute',
			right: (clArrowSize[i]+10)+'px',
			bottom: 0,
			cursor: 'pointer'
		});
		$clPauseAutoPlay[i].css({
			position: 'absolute',
			right: (clArrowSize[i]+10)+'px',
			bottom: 0,
			cursor: 'pointer'
		});
		// sets the inner padding according to the width
		$clSlidesContent[i].css({
			padding: '10px '+(clArrowSize[i]+10)+'px'
		})
		// Since everything is set up, we can start creating 4 copies of the slides
		// and append/prepend them respectively:
		var $temp;
		$clSlides[i].each(function(index, el) {
				index++;
				if (index === 1) {
					$(this).clone().appendTo($clInner[i]);
				} else if (index === 2) {
					$(this).clone().appendTo($clInner[i]);
				} 

				if (index === clSlidesNumBefore[i]){
					$temp = $(this);
				} else if (index === clSlidesNum[i]){
					$(this).clone().prependTo($clInner[i]);
					$temp.clone().prependTo($clInner[i]);
				}
			});

			// INTERVAL Startup //
			clSliding[i] = false;
			// INTERVAL //
			function clPlay(){
				if (clAutoPlay[i] === true){
					// setInterval (Slide Automation)
					interval[i] = setInterval(function(){
					// animate margin-left. If it's last go to second
						clSliding[i] = true;
						$clInner[i]
							.animate({marginLeft: '-='+clMove[i]+'%'},
									clSpeed[i]/2)
							.delay(clSpeed[i]/5)
							.animate({marginLeft: '-='+clMoveFull[i]+'%'},
									clSpeed[i],
									function(){
										clSlidePos[i]++;
										if (clSlidePos[i] < 1) {
											clSlidePos[i] = clSlidesNum[i];
											$clInner[i].css({marginLeft: "-"+clLastPos[i]+'%'});
										} else if (clSlidePos[i] > clSlidesNum[i]) {
											clSlidePos[i] = 1;
											$clInner[i].css({marginLeft: "-"+clFirstPos[i]+'%'});
										};
										clSliding[i] = false;
								})
					},clTime[i]);
				};
			};

			function clPause(){
				clearInterval(interval[i]);
			};

			// LEFT Startup //
			clLeftHover[i] = false;
			clLeftHoverLeave[i] = false;
			// LEFT //
			$clArrowLeft[i]
				.on('mouseenter', function() {
					if (clSliding[i] === false && clLeftHover[i] === false) {
						clLeftHover[i] = true;
						clPause();
						$clInner[i]
							.stop(true, true)
							.animate({marginLeft: '+='+clMove[i]+'%'},
							clSpeed[i]/4);
					}
			})
				.on('mouseleave', function() {
					clLeftHoverLeave[i] = true;
					if (clSliding[i] === false && clLeftHover[i] === true) {
						clPlay();
						$clInner[i]
							.stop(true, true)
							.animate({marginLeft: '-='+clMove[i]+'%'},
							clSpeed[i]/4);
						clLeftHover[i] = false;
						clLeftHoverLeave[i] = false;
					}
			})
				.on('click', function() {
					if (clSliding[i] === false && clLeftHover[i] === true) {
					clSliding[i] = true;
					$clInner[i]
						.animate({marginLeft: '+='+'100%'},
							clSpeed[i],
							function(){
								clSlidePos[i]--;
								if (clSlidePos[i] < 1) {
									clSlidePos[i] = clSlidesNum[i];
									$clInner[i].css({marginLeft: "-"+(clLastPos[i]-clMove[i])+'%'});
								};
								if (clLeftHoverLeave[i]) {
									clPlay();
									$clInner[i]
										.animate({marginLeft: '-='+clMove[i]+'%'},
										clSpeed[i]/4);
									clLeftHoverLeave[i] = false;
									clLeftHover[i] = false;
								};
								clSliding[i] = false;
							});
					$cl[i]	.trigger('cls-clickLeft')
							.trigger('cls-left');
					}
			})
				.on({ 'touchstart' : function(){
					clLeftHover[i] = true;
					if (clSliding[i] === false && clLeftHover[i] === true) {
					clPause();
					clSliding[i] = true;
					$clInner[i]
						.animate({marginLeft: '+='+'100%'},
							clSpeed[i],
							function(){
								clSlidePos[i]--;
								if (clSlidePos[i] < 1) {
									clSlidePos[i] = clSlidesNum[i];
									$clInner[i].css({marginLeft: "-"+clLastPos[i]+'%'});
								};
								clPlay();
								$clInner[i]
								clLeftHoverLeave[i] = false;
								clLeftHover[i] = false;
								clSliding[i] = false;
							});
					$cl[i]	.trigger('cls-touchLeft')
							.trigger('cls-left');
					}
			} });

			// RIGHT Setup //
			clRightHover[i] = false;
			clRightHoverLeave[i] = false;
			// RIGHT //
			$clArrowRight[i]
				.on('mouseenter', function() {
					if (clSliding[i] === false && clRightHover[i] === false) {
						clRightHover[i] = true;
						clPause();
						$clInner[i]
							.stop(true, true)
							.animate({marginLeft: '-='+clMove[i]+'%'},
							clSpeed[i]/4);
					};
			})
				.on('mouseleave', function() {
					clRightHoverLeave[i] = true;
					if (clSliding[i] === false && clRightHover[i] === true) {
						clPlay();
						$clInner[i]
							.stop(true, true)
							.animate({marginLeft: '+='+clMove[i]+'%'},
							clSpeed[i]/4);
						clRightHover[i] = false;
						clRightHoverLeave[i] = false;
					};
			})
				.on('click', function() {
				if (clSliding[i] === false && clRightHover[i] === true) {
					clSliding[i] = true;
					$clInner[i]
						.animate({marginLeft: '-='+'100%'},
							clSpeed[i],
							function(){
								clSlidePos[i]++;
								if (clSlidePos[i] > clSlidesNum[i]) {
									clSlidePos[i] = 1;
									$clInner[i].css({marginLeft: "-"+(clFirstPos[i]+clMove[i])+'%'});
								};
								if (clRightHoverLeave[i]) {
									clPlay();
									$clInner[i]
										.animate({marginLeft: '+='+clMove[i]+'%'},
										clSpeed[i]/4);
									clRightHoverLeave[i] = false;
									clRightHover[i] = false;
								};
								clSliding[i] = false;
							});
				$cl[i]	.trigger('cls-clickRight')
						.trigger('cls-right');
				};
			})
				.on({ 'touchstart' : function(){
					clRightHover[i] = true;
					if (clSliding[i] === false && clRightHover[i] === true) {
					clPause();
					clSliding[i] = true;
					$clInner[i]
						.animate({marginLeft: '-='+'100%'},
							clSpeed[i],
							function(){
								clSlidePos[i]++;
								if (clSlidePos[i] > clSlidesNum[i]) {
									clSlidePos[i] = 1;
									$clInner[i].css({marginLeft: "-"+clFirstPos[i]+'%'});
								};
								clPlay();
								$clInner[i]
								clRightHoverLeave[i] = false;
								clRightHover[i] = false;
								clSliding[i] = false;
							});
					$cl[i]	.trigger('cls-touchRight')
							.trigger('cls-right');
					}
			}});

			// Right Swipe
			// Left Swipe
			$clSlides[i]
				.on('swiperight',  function(e){ 
					if (clSliding[i] === false && clSwiping[i] === true) {
						clPause();
						clSliding[i] = true;
						$clInner[i]
							.animate({marginLeft: '+='+'100%'},
								clSpeed[i],
								function(){
									clSlidePos[i]--;
									if (clSlidePos[i] < 1) {
										clSlidePos[i] = clSlidesNum[i];
										$clInner[i].css({marginLeft: "-"+clLastPos[i]+'%'});
									};
									clSliding[i] = false;
								});
						clPlay();
						$cl[i]	.trigger('cls-swipeRight')
								.trigger('cls-left');
					};
			 	})
				.on('swipeleft', function(){
					if (clSliding[i] === false && clSwiping[i] === true) {
						clPause();
						clSliding[i] = true;
						$clInner[i]
							.animate({marginLeft: '-='+'100%'},
								clSpeed[i],
								function(){
									clSlidePos[i]++;
									if (clSlidePos[i] > clSlidesNum[i]) {
										clSlidePos[i] = 1;
										$clInner[i].css({marginLeft: "-"+clFirstPos[i]+'%'});
									};
									clSliding[i] = false;
								});
						clPlay();
						$cl[i]	.trigger('cls-swipeLeft')
								.trigger('cls-right');
					};
		       });

			// Keypress within slider
			$cl[i].keydown(function(ev) { 
				ev.preventDefault();
  				if ( ev.keyCode == 39 ) { /*right*/
  					if (clSliding[i] === false && clSwiping[i] === true) {
  						clSliding[i] = true;
						clPause();
						$clInner[i]
							.animate({marginLeft: '-='+'100%'},
								clSpeed[i],
								function(){
									clSlidePos[i]++;
									if (clSlidePos[i] > clSlidesNum[i]) {
										clSlidePos[i] = 1;
										$clInner[i].css({marginLeft: "-"+clFirstPos[i]+'%'});
									};
									clSliding[i] = false;
								});
						clPlay();
						$cl[i]	.trigger('cls-keyRight')
								.trigger('cls-right');
					};
     			} else if ( ev.keyCode == 37 ) { /*left*/
					if (clSliding[i] === false && clSwiping[i] === true) {
						clSliding[i] = true;
						clPause();
						$clInner[i]
							.animate({marginLeft: '+='+'100%'},
								clSpeed[i],
								function(){
									clSlidePos[i]--;
									if (clSlidePos[i] < 1) {
										clSlidePos[i] = clSlidesNum[i];
										$clInner[i].css({marginLeft: "-"+clLastPos[i]+'%'});
									};
									clSliding[i] = false;
								});
						clPlay();
						$cl[i]	.trigger('cls-keyLeft')
								.trigger('cls-left');
					};
     			} else if ( ev.keyCode == 32 ) { /*space*/
					if (clAutoPlay[i] == true) {
						$clPauseAutoPlay[i].hide();
						$clPlayAutoPlay[i].show();
						clAutoPlay[i] = false;
						$cl[i].trigger('cls-pause');
						clPause();
					} else if (clAutoPlay[i] == false) {
						$clPauseAutoPlay[i].show();
						$clPlayAutoPlay[i].hide();
						clAutoPlay[i] = true;
						$cl[i].trigger('cls-play');
						clPlay();
					};
				};
  			});
			
			// At the end -> Stop Autoplay:
			if (clAutoPlay[i] === true) {
				$clPlayAutoPlay[i].hide();
			} else {
				$clPauseAutoPlay[i].hide();
			}
			$clPauseAutoPlay[i].click(function(event) {
				$clPauseAutoPlay[i].hide();
				$clPlayAutoPlay[i].show();
				clAutoPlay[i] = false;
				$cl[i].trigger('cls-pause');
				clPause();
			});
			$clPlayAutoPlay[i].click(function(event) {
				$clPauseAutoPlay[i].show();
				$clPlayAutoPlay[i].hide();
				clAutoPlay[i] = true;
				$cl[i].trigger('cls-play');
				clPlay();
			});
			// Start the interval
			clPlay();
		});
});
