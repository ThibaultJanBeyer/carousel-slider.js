$(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* Extra Swipe Plugin: jquery.detectSwipe v2.1.1 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad and Android * http://github.com/marcandre/detect_swipe * Based on touchwipe by Andreas Waltl, netCU Internetagentur (http://www.netcu.de)  */
	function onTouchEnd(){this.removeEventListener("touchmove",onTouchMove),this.removeEventListener("touchend",onTouchEnd),isMoving=!1}function onTouchMove(t){if($.detectSwipe.preventDefault&&t.preventDefault(),isMoving){var e,n=t.touches[0].pageX,o=t.touches[0].pageY,s=startX-n,i=startY-o;Math.abs(s)>=$.detectSwipe.threshold?e=s>0?"left":"right":Math.abs(i)>=$.detectSwipe.threshold&&(e=i>0?"down":"up"),e&&(onTouchEnd.call(this),$(this).trigger("swipe",e).trigger("swipe"+e))}}function onTouchStart(t){1==t.touches.length&&(startX=t.touches[0].pageX,startY=t.touches[0].pageY,isMoving=!0,this.addEventListener("touchmove",onTouchMove,!1),this.addEventListener("touchend",onTouchEnd,!1))}function setup(){this.addEventListener&&this.addEventListener("touchstart",onTouchStart,!1)}function teardown(){this.removeEventListener("touchstart",onTouchStart)}$.detectSwipe={version:"2.1.1",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,threshold:20};var startX,startY,isMoving=!1,startTime,elapsedTime;$.event.special.swipe={setup:setup},$.each(["left","up","down","right"],function(){$.event.special["swipe"+this]={setup:function(){$(this).on("swipe",$.noop)}}});
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* -------------------------------------------------------------
	The MIT License (MIT)

		* VERSION: 0.0.3
		* DATE: 2015-05-20

	Added v003 2015-05-20:
	+ You can now have multiple totally different sliders on one page (todo: slider inside of slider)
	+ Sizes are set directly in html

	Added v002 2015-05-18:
	+ Swipe Gestures (now built in with modified jquery.detectSwipe v2.1.1)
	+ Cleaner Animation
	
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
	------------------------------------------------------------- */

	// Options (change as you like)
	
	var clAnimationSpeed = 800; // Speed of animations in ms
	var clAutoPlay = true; // Choose if the slider automatically slides
	var clSpeed = 5000; // Time between automatic sliding in ms
	var clSlideOverflow = 'auto'; // Set what happens when there is overflow (basic css)
	var clSwiping = true; // Choose if swipe gestures for mobile shall be enabled
	var clUnit = 'vw'; // choose a measuring unit vw = % of Viewport Width (vw = best)
	var clHeightUnit = 'vh' // choose a measuring unit vh = % of Viewport Height (vh = best)

	/*
	-------------------------------------------------------------
	Only change the following code if you know what you're doing.
	-------------------------------------------------------------
	*/
	
	// Setup
	var $cl = [];
	var $clInner = [];
	var $clSlides = [];
	var $clArrows = [];
	var $clArrowLeft = [];
	var $clArrowRight = [];
	var $clPauseAutoPlay = [];
	var $clPlayAutoPlay = [];
	var clWidth = [];
	var clHeight = [];
	var clMove = [];
	var clMoveFull = [];
	var clSlidesNum = [];
	var clSlidesNumBefore = [];
	var clInnerWidth = [];
	var clFirstPos = [];
	var clLastPos = [];
	var clSlidePos = [];
	var interval = [];
	var clSliding = [];
	var clLeftHover = [];
	var clLeftHoverLeave = [];
	var clRightHover = [];
	var clRightHoverLeave = [];

	$('.carousel').each(function(i, el) {
		// Find your stuff
		$cl[i] = $(this);
		$clInner[i] = $(this).find('.inner');
		$clSlides[i] = $(this).find('.slide');
		$clArrows[i] = $(this).find('.arrow');
		$clArrowLeft[i] = $(this).find('.arrow.left');
		$clArrowRight[i] = $(this).find('.arrow.right');
		$clPauseAutoPlay[i] = $(this).find('.pause');
		$clPlayAutoPlay[i] = $(this).find('.play');
		// Get Width and Height
		clWidth[i] = $cl[i].attr('clWidth');
		clHeight[i] = $cl[i].attr('clHeight');
		// Move Options
		clMove[i] = clWidth[i]/10;
		clMoveFull[i] = clWidth[i] - clMove[i];
		// We begin by checking how many slides there are
		clSlidesNum[i] = $clSlides[i].length;//3
		// Note that the slider will only work if there are more than one slides inside.
		// We also want to define the slide before the last
		clSlidesNumBefore[i] = clSlidesNum[i] - 1;//2 in this case
		// And defining the width of all slides together:
		clInnerWidth[i] = clWidth[i]*(clSlidesNum[i]+4);
		// Now we set up the starting Positions of the first and the last slide.
		// Since we will add 2 Before first and 2 after last there is some calculation to be done.
		clFirstPos[i] = 2*clWidth[i];
		clLastPos[i] = (clSlidesNum[i]+1)*clWidth[i];
		// Lastly we set the slide where to start (we want to start at slide 1)
		clSlidePos[i] = 1;
		// Now we set up the starting CSS relative to the chosen Options
		$cl[i].css({
			width: clWidth[i]+clUnit,
			height: clHeight[i]+clHeightUnit,
			position: 'relative',
			overflow: 'hidden',
			background: 'black'
		});
		$clInner[i].css({
			margin: '0',
			marginLeft: "-"+clFirstPos[i]+clUnit,
			display: 'block',
			height: '100%',	
			padding: '0',
			width:clInnerWidth[i]+clUnit
		});
		$clSlides[i].css({
			width: clWidth[i]+clUnit,
			height: clHeight[i]+clHeightUnit,
			overflowY: clSlideOverflow,
			float: 'left'
		});
		$clArrows[i].css({
			width: clMove[i]+clUnit,
			height: '100%',
			position: 'absolute',
			top: '0',
			zIndex: '5',
			cursor: 'pointer'
		});
		$clArrowLeft[i].css({
			left: '0'
		});
		$clArrowRight[i].css({
			right: '0'
		});
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
				if (clAutoPlay === true){
					// setInterval (Slide Automation)
					interval[i] = setInterval(function(){
					// animate margin-left. If it's last go to second
						clSliding[i] = true;
						$clInner[i]
							.animate({marginLeft: '-='+clMove[i]+clUnit},
									clAnimationSpeed/2)
							.delay(clAnimationSpeed/6)
							.animate({marginLeft: '-='+clMoveFull[i]+clUnit},
									clAnimationSpeed,
									function(){
										clSlidePos[i]++;
										if (clSlidePos[i] < 1) {
											clSlidePos[i] = clSlidesNum[i];
											$clInner[i].css({marginLeft: "-"+clLastPos[i]+clUnit});
										} else if (clSlidePos[i] > clSlidesNum[i]) {
											clSlidePos[i] = 1;
											$clInner[i].css({marginLeft: "-"+clFirstPos[i]+clUnit});
										};
										clSliding[i] = false;
								})
					},clSpeed);
					
				}
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
							.animate({marginLeft: '+='+clMove[i]+clUnit},
							clAnimationSpeed/4);
					}
			})
				.on('mouseleave', function() {
					clLeftHoverLeave[i] = true;
					if (clSliding[i] === false && clLeftHover[i] === true) {
						clPlay();
						$clInner[i]
							.stop(true, true)
							.animate({marginLeft: '-='+clMove[i]+clUnit},
							clAnimationSpeed/4);
						clLeftHover[i] = false;
						clLeftHoverLeave[i] = false;
					}
			})
				.on('click', function() {
					if (clSliding[i] === false && clLeftHover[i] === true) {
					clSliding[i] = true;
					$clInner[i]
						.animate({marginLeft: '+='+clWidth[i]+clUnit},
							clAnimationSpeed,
							function(){
								clSlidePos[i]--;
								if (clSlidePos[i] < 1) {
									clSlidePos[i] = clSlidesNum[i];
									$clInner[i].css({marginLeft: "-"+(clLastPos[i]-clMove[i])+clUnit});
								};
								if (clLeftHoverLeave[i]) {
									clPlay();
									$clInner[i]
										.animate({marginLeft: '-='+clMove[i]+clUnit},
										clAnimationSpeed/4);
									clLeftHoverLeave[i] = false;
									clLeftHover[i] = false;
								};
								clSliding[i] = false;
							});
					};	
			});

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
							.animate({marginLeft: '-='+clMove[i]+clUnit},
							clAnimationSpeed/4);
					}
			})
				.on('mouseleave', function() {
					clRightHoverLeave[i] = true;
					if (clSliding[i] === false && clRightHover[i] === true) {
						clPlay();
						$clInner[i]
							.stop(true, true)
							.animate({marginLeft: '+='+clMove[i]+clUnit},
							clAnimationSpeed/4);
						clRightHover[i] = false;
						clRightHoverLeave[i] = false;
					}
			})
				.on('click', function() {
				if (clSliding[i] === false && clRightHover[i] === true) {
					clSliding[i] = true;
					$clInner[i]
						.animate({marginLeft: '-='+clWidth[i]+clUnit},
							clAnimationSpeed,
							function(){
								clSlidePos[i]++;
								if (clSlidePos[i] > clSlidesNum[i]) {
									clSlidePos[i] = 1;
									$clInner[i].css({marginLeft: "-"+(clFirstPos[i]+clMove[i])+clUnit});
								};
								if (clRightHoverLeave[i]) {
									clPlay();
									$clInner[i]
										.animate({marginLeft: '+='+clMove[i]+clUnit},
										clAnimationSpeed/4);
									clRightHoverLeave[i] = false;
									clRightHover[i] = false;
								};
								clSliding[i] = false;
							});
				};
			});

			// Right Swipe
			// Left Swipe
			$clInner[i]
				.on('swiperight',  function(e){ 
					if (clSliding[i] === false && clSwiping === true) {
						clPause();
						$clInner[i]
							.animate({marginLeft: '+='+clWidth[i]+clUnit},
								clAnimationSpeed,
								function(){
									clSlidePos[i]--;
									if (clSlidePos[i] < 1) {
										clSlidePos[i] = clSlidesNum[i];
										$clInner[i].css({marginLeft: "-"+clLastPos[i]+clUnit});
									};
								});
						clPlay();
					};
			 	})
				.on('swipeleft', function(){
					if (clSliding[i] === false && clSwiping === true) {
						clPause();
						$clInner[i]
							.animate({marginLeft: '-='+clWidth[i]+clUnit},
								clAnimationSpeed,
								function(){
									clSlidePos[i]++;
									if (clSlidePos[i] > clSlidesNum[i]) {
										clSlidePos[i] = 1;
										$clInner[i].css({marginLeft: "-"+clFirstPos[i]+clUnit});
									};
								});
						clPlay();
					};
		       });
			
			// At the end -> Stop Autoplay:
			$clPauseAutoPlay[i].click(function(event) {
				clAutoPlay = false;
				clPause();
			});
			$clPlayAutoPlay[i].click(function(event) {
				clAutoPlay = true;
				clPlay();
			});
			// Start the interval
			clPlay();
	});
});
