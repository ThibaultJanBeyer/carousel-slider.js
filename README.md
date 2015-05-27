# carousel-slider.js

	* VERSION: 0.0.4
 	* DATE: 2015-05-27
 	* under The MIT License (MIT)
 	* Copyright (c) 2015, Thibault Jan Beyer
	* Website: http://www.thibaultjanbeyer.com/

a simple but awesome carousel slide


Project Page: Demo, Info & Updates
-----------------------------------

http://kit.thibaultjanbeyer.com/tools/carousel-slider/


Key-Features
--------------------

+ Responsive & Mobile Friendly
+ Built in Swipe gestures
+ Support multiple Sliders on one Page
+ W3C Friendly
+ Light (Only ~6KB)
+ Easy to implement
+ Easy Fullscreen
+ Customizable
+ Crossbrowser (Chrome, Safari, Opera, Firefox & even IE +Mobile)
+ Slide just anything
+ Free for ever & everything


Install
---------------

First add jQuery to your header:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

Just download the clslider.js and link it to your documents after jquery (full control):

```html
<script src="yourfolder/carousel-slider003.js"></script>
```

OR just use this link if you don't want to install anything (easy setup):

```html
<script src="http://kit.thibaultjanbeyer.com/tools/carousel-slider/cls.min.js"></script>
```

This is the basic html Markup you'll need:

```html
<div class="carousel" data-clWidth="100" data-clHeight="100">
	<div class="inner">
		<div class="slide" style="background: red">
			<h3>Slide 1</h3>
		</div>
		<div class="slide" style="background: orange">
			<h3>Slide 2</h3>
		</div>
		<div class="slide" style="background: yellow">
			<h3>Slide 3</h3>
		</div>
	</div>
	<div class="arrow left"></div>
	<div class="arrow right"></div>
	<p class="pause">Pause</p>
	<p class="play">Play</p>
</div>
```

*1.Note: To change the width and/or the height, just change the values of data-clWidth="100" data-clHeight="100" to what ever you want.*
*2.Note: if you do not need pause/play buttons or even whole Slides, just add/remove them in html.*

That's it! You're ready to rock!


Customisation
---------------------

Change the whole width and height (keep vw and vh as units for responsive). Aswell as the animation speed and automatic slide speed (you can also set clAutoPlay to "false").

```js
// Options
var clAnimationSpeed = 800; // Speed of animations in ms
var clAutoPlay = true; // Choose if the slider automatically slides
var clSpeed = 5000; // Time between automatic sliding in ms
var clSlideOverflow = 'auto'; // Set what happens when there is overflow (basic css)
var clSwiping = true; // Choose if swipe gestures for mobile shall be enabled
var clUnit = 'vw'; // choose a measuring unit vw = % of Viewport Width (vw = best)
var clHeightUnit = 'vh' // choose a measuring unit vh = % of Viewport Height (vh = best)
```

In some cases you might use your own Markup (advanced users):

```js
// Find your stuff
$cl[i] = $(this);
$clInner[i] = $(this).find('.inner');
$clSlides[i] = $(this).find('.slide');
$clArrows[i] = $(this).find('.arrow');
$clArrowLeft[i] = $(this).find('.arrow.left');
$clArrowRight[i] = $(this).find('.arrow.right');
$clPauseAutoPlay[i] = $(this).find('.pause');
$clPlayAutoPlay[i] = $(this).find('.play');
```

Styling is no problem, just use regular CSS. But in some case you might want to change the preset styles. If you know basics in Jquery it is also supereasy.

------------------
Have Fun !

