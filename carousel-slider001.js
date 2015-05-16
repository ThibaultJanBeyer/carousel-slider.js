$(function(){
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

	// Options
	var clWidth = 100;
	var clHeight = 100;
	var clUnit = 'vw'; // vw = % of Viewport Width
	var clHeightUnit = 'vh' // vh = % of Viewport Height
	var clAnimationSpeed = 1000;
	var clSpeed = 5000;
	var clAutoPlay = true;
	var clSlideOverflow = 'auto'; // Set what happens when there is overflow (basic css)

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
	
	// Start
	function clPlay(){
		if (clAutoPlay === true){
			// setInterval (Slide Automation)
			interval = setInterval(function(){
			// animate margin-left. If it's last go to second
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
						})
			},clSpeed);
		}
	};

	function clPause(){
		clearInterval(interval);
	};

	// lefthover
	$clArrowLeft.hover(
		function() {
			/* Stuff to do when the mouse enters the element */
				clPause();
				$clInner
					.animate({marginLeft: '+='+clMove+clUnit},
					clAnimationSpeed/4);
		}, function() {
			/* Stuff to do when the mouse leaves the element */

				clPlay();
					$clInner
						.animate({marginLeft: '-='+clMove+clUnit},
						clAnimationSpeed/4);
				}
	);
		// Left Click
		// if it's first go to last
		$clArrowLeft.click(function(event) {
			/* Act on the event */
				$clInner.animate({marginLeft: '+='+clWidth+clUnit},
						clAnimationSpeed,
						function(){
							clSlidePos--;
							if (clSlidePos < 1) {
								clSlidePos = clSlidesNum;
								$clInner.css({marginLeft: "-"+(clLastPos-clMove)+clUnit});
							};
						})
		});
	
	// righthover
	$clArrowRight.hover(
		function() {
			/* Stuff to do when the mouse enters the element */
				clPause();
				$clInner
					.animate({marginLeft: '-='+clMove+clUnit},
					clAnimationSpeed/4);
		}, function() {
			/* Stuff to do when the mouse leaves the element */
				clPlay();
					$clInner
						.animate({marginLeft: '+='+clMove+clUnit},
						clAnimationSpeed/4);
				}
	);
		// Right Click
		// if it's last go to first
		$clArrowRight.click(function(event) {
			/* Act on the event */
				$clInner.animate({marginLeft: '-='+clWidth+clUnit},
						clAnimationSpeed,
						function(){
							clSlidePos++;
							if (clSlidePos > clSlidesNum) {
								clSlidePos = 1;
								$clInner.css({marginLeft: "-"+(clFirstPos+clMove)+clUnit});
							};
						})
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
