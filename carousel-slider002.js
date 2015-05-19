$(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* Extra Swipe Plugin: jquery.detectSwipe v2.1.1 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad and Android * http://github.com/marcandre/detect_swipe * Based on touchwipe by Andreas Waltl, netCU Internetagentur (http://www.netcu.de)  */
	function onTouchEnd(){this.removeEventListener("touchmove",onTouchMove),this.removeEventListener("touchend",onTouchEnd),isMoving=!1}function onTouchMove(t){if($.detectSwipe.preventDefault&&t.preventDefault(),isMoving){var e,n=t.touches[0].pageX,o=t.touches[0].pageY,s=startX-n,i=startY-o;Math.abs(s)>=$.detectSwipe.threshold?e=s>0?"left":"right":Math.abs(i)>=$.detectSwipe.threshold&&(e=i>0?"down":"up"),e&&(onTouchEnd.call(this),$(this).trigger("swipe",e).trigger("swipe"+e))}}function onTouchStart(t){1==t.touches.length&&(startX=t.touches[0].pageX,startY=t.touches[0].pageY,isMoving=!0,this.addEventListener("touchmove",onTouchMove,!1),this.addEventListener("touchend",onTouchEnd,!1))}function setup(){this.addEventListener&&this.addEventListener("touchstart",onTouchStart,!1)}function teardown(){this.removeEventListener("touchstart",onTouchStart)}$.detectSwipe={version:"2.1.1",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,threshold:20};var startX,startY,isMoving=!1,startTime,elapsedTime;$.event.special.swipe={setup:setup},$.each(["left","up","down","right"],function(){$.event.special["swipe"+this]={setup:function(){$(this).on("swipe",$.noop)}}});
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*
	-------------------------------------------------------------
	The MIT License (MIT)

		* VERSION: 0.0.2
		* DATE: 2015-05-18

	Added 2015-05-18:
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
	-------------------------------------------------------------
	*/

	// Options
	var clWidth = 100;
	var clHeight = 100;
	var clUnit = 'vw'; // vw = % of Viewport Width
	var clHeightUnit = 'vh' // vh = % of Viewport Height
	var clAnimationSpeed = 800;
	var clSpeed = 5000;
	var clAutoPlay = true;
	var clSlideOverflow = 'auto'; // Set what happens when there is overflow (basic css)
	var clSwiping = true; // Choose if swipe gestures for mobile shall be enabled

	// Find your stuff
	var $cl = $('#carousel');
	var $clInner = $cl.find('.inner');
	var $clSlides = $clInner.find('.slide');
	var $clArrows = $cl.find('.arrow');
	var $clArrowLeft = $cl.find('.arrow.left');
	var $clArrowRight = $cl.find('.arrow.right');
	var $clPauseAutoPlay = $cl.find('.pause');
	var $clPlayAutoPlay = $cl.find('.play');

	/*
	-------------------------------------------------------------
	Only change the following code if you know what you're doing.
	-------------------------------------------------------------
	*/

	// Move Options
	var clMove = clWidth/10;
	var clMoveFull = clWidth - clMove;

	// Setup
	// We begin by checking how many slides there are
	var clSlidesNum = $clSlides.length; //4 Here
	// Note that the slider will only work if there are more than one slides inside.
	// We also want to define the slide before the last
	var clSlidesNumBefore = clSlidesNum - 1;//3 in this case
	// And defining the width of all slides together:
	var clInnerWidth = clWidth*(clSlidesNum+4);
	// Now we set up the starting Positions of the first and the last slide. Since we will add 2 Before first and 2 after last there is some calculation to be done.
	var clFirstPos = 2*clWidth;
	var clLastPos = (clSlidesNum+1)*clWidth;
	// Lastly we set the slide where to start (we want to start at slide 1)
	var clSlidePos = 1;
	// Now we set up the starting CSS relative to the chosen Options
	// Only change the CSS if you know what you do!
	$cl.css({
		width: clWidth+clUnit,
		height: clHeight+clHeightUnit,
		position: 'relative',
		overflow: 'hidden',
		background: 'black'
	});
	$clInner.css({
		margin: '0',
		marginLeft: "-"+clFirstPos+clUnit,
		display: 'block',
		height: '100%',	
		padding:0,
		width:clInnerWidth+'vw'
	});
	$clSlides.css({
		width: clWidth+clUnit,
		height: clHeight+clHeightUnit,
		overflowY: clSlideOverflow,
		float: 'left'
	});
	$clArrows.css({
		width: clMove+clUnit,
		height: '100%',
		position: 'absolute',
		top: '0',
		zIndex: '5',
		cursor: 'pointer'
	});
	$clArrowLeft.css({
		left: '0'
	});
	$clArrowRight.css({
		right: '0'
	});
	
	// Since everything is set up, we can start creating 4 copies of the lides and append/prepend them respectively:
	var i = 0;
	var $temp;
	$clSlides.each(function(index, el) {
		i++;
		if (i === 1) {
			$(this).clone().appendTo($clInner);
		} else if (i === 2) {
			$(this).clone().appendTo($clInner);
		} 

		if (i === clSlidesNumBefore){
			$temp = $(this);
		} else if (i === clSlidesNum){
			$(this).clone().prependTo($clInner);
			$temp.clone().prependTo($clInner);
		}
	});

	// Interval
	var interval;
	var clSliding = false;
	// Start
	function clPlay(){
		if (clAutoPlay === true){
			// setInterval (Slide Automation)
			interval = setInterval(function(){
			// animate margin-left. If it's last go to second
				clSliding = true;
				$clInner
					.animate({marginLeft: '-='+clMove+clUnit},
							clAnimationSpeed/2)
					.delay(clAnimationSpeed/6)
					.animate({marginLeft: '-='+clMoveFull+clUnit},
							clAnimationSpeed,
							function(){
								clSlidePos++;
								if (clSlidePos < 1) {
									clSlidePos = clSlidesNum;
									$clInner.css({marginLeft: "-"+clLastPos+clUnit});
								} else if (clSlidePos > clSlidesNum) {
									clSlidePos = 1;
									$clInner.css({marginLeft: "-"+clFirstPos+clUnit});
								};
								clSliding = false;
						})
			},clSpeed);
			
		}
	};

	function clPause(){
		clearInterval(interval);
	};

	// lefthover //
	var clLeftHover = false;
	var clLeftHoverLeave = false;

	$clArrowLeft
		.on('mouseenter', function() {
			if (clSliding === false && clLeftHover === false) {
				clLeftHover = true;
				clPause();
				$clInner
					.stop(true, true)
					.animate({marginLeft: '+='+clMove+clUnit},
					clAnimationSpeed/4);
			}
	})
		.on('mouseleave', function() {
			clLeftHoverLeave = true;
			if (clSliding === false && clLeftHover === true) {
				clPlay();
				$clInner
					.stop(true, true)
					.animate({marginLeft: '-='+clMove+clUnit},
					clAnimationSpeed/4);
				clLeftHover = false;
				clLeftHoverLeave = false;
			}
	})
		.on('click', function() {
			if (clSliding === false && clLeftHover === true) {
			clSliding = true;
			$clInner.animate({marginLeft: '+='+clWidth+clUnit},
					clAnimationSpeed,
					function(){
						clSlidePos--;
						if (clSlidePos < 1) {
							clSlidePos = clSlidesNum;
							$clInner.css({marginLeft: "-"+(clLastPos-clMove)+clUnit});
						};
						if (clLeftHoverLeave) {
							clPlay();
							$clInner
								.animate({marginLeft: '-='+clMove+clUnit},
								clAnimationSpeed/4);
							clLeftHoverLeave = false;
							clLeftHover = false;
						};
						clSliding = false;
					})
			}	
	});
	
	// righthover
	var clRightHover = false;
	var clRightHoverLeave = false;

	$clArrowRight
		.on('mouseenter', function() {
			if (clSliding === false && clRightHover === false) {
				clRightHover = true;
				clPause();
				$clInner
					.stop(true, true)
					.animate({marginLeft: '-='+clMove+clUnit},
					clAnimationSpeed/4);
			}
	})
		.on('mouseleave', function() {
			clRightHoverLeave = true;
			if (clSliding === false && clRightHover === true) {
				clPlay();
				$clInner
					.stop(true, true)
					.animate({marginLeft: '+='+clMove+clUnit},
					clAnimationSpeed/4);
				clRightHover = false;
				clRightHoverLeave = false;
			}
	})
		.on('click', function() {
		if (clSliding === false && clRightHover === true) {
			clSliding = true;
			$clInner.animate({marginLeft: '-='+clWidth+clUnit},
					clAnimationSpeed,
					function(){
						clSlidePos++;
						if (clSlidePos > clSlidesNum) {
							clSlidePos = 1;
							$clInner.css({marginLeft: "-"+(clFirstPos+clMove)+clUnit});
						};
						if (clRightHoverLeave) {
							clPlay();
							$clInner
								.animate({marginLeft: '+='+clMove+clUnit},
								clAnimationSpeed/4);
							clRightHoverLeave = false;
							clRightHover = false;
						};
						clSliding = false;
					})
		}
	});

	// Right Swipe
	// Left Swipe
	$clInner
		.on('swiperight',  function(e){ 
			if (clSliding === false && clSwiping === true) {
				clPause();
				$clInner.animate({marginLeft: '+='+clWidth+clUnit},
					clAnimationSpeed,
					function(){
						clSlidePos--;
						if (clSlidePos < 1) {
							clSlidePos = clSlidesNum;
							$clInner.css({marginLeft: "-"+clLastPos+clUnit});
						};
					})
				clPlay();
			}
	 })
		.on('swipeleft', function(){
			if (clSliding === false && clSwiping === true) {
				clPause();
				$clInner.animate({marginLeft: '-='+clWidth+clUnit},
						clAnimationSpeed,
						function(){
							clSlidePos++;
							if (clSlidePos > clSlidesNum) {
								clSlidePos = 1;
								$clInner.css({marginLeft: "-"+clFirstPos+clUnit});
							};
						})
				clPlay();
			}
       });

	// Stop Autoplay:
	$clPauseAutoPlay.click(function(event) {
		clAutoPlay = false;
		clPause();
	});
	$clPlayAutoPlay.click(function(event) {
		clAutoPlay = true;
		clPlay();
	});

		clPlay();
});
