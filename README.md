# carousel-slider.js

	* VERSION: 0.0.1
 	* DATE: 2015-05-16
 	* under The MIT License (MIT)
 	* Copyright (c) 2015, Thibault Jan Beyer
	* Website: http://www.thibaultjanbeyer.com/

a simple but awesome carousel slide


Project Page: Demo, Info & Updates
-----------------------------------

http://kit.thibaultjanbeyer.com/tools/carousel-slider/


Key-Features
--------------------

+ Responsive
+ Super Light (Only ~2.776 bytes)
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
<script src="yourfolder/clslider-001.js"></script>
```

OR just use this link if you don't want to install anything (easy setup):

```html
<script src="http://kit.thibaultjanbeyer.com/tools/carousel-slider/carousel-slider001_mini.js"></script>
```

This is the basic html Markup you'll need:

```html
<div id="carousel" class="carousel">
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

*Note: if you do not need pause/play buttons or even whole Slides, just add/remove them in html.*

That's it! You're ready to rock!


Customisation
---------------------

Change the whole width and height (keep vw and vh as units for responsive). Aswell as the animation speed and automatic slide speed (you can also set clAutoPlay to "false").

```js
// Options
var clWidth = 100;
var clHeight = 100;
var clUnit = 'vw'; // vw = % of Viewport Width
var clHeightUnit = 'vh' // vh = % of Viewport Height
var clAnimationSpeed = 1000;
var clSpeed = 15000;
var clAutoPlay = true;
var clSlideOverflow = 'scroll'; // Set what happens when there is overflow (basic css)
```

In some cases you might use your own Markup:

```js
// Find your stuff
var $cl = $('#carousel');
var $clInner = $cl.find('.inner');
var $clSlides = $clInner.find('.slide');
var $clArrows = $cl.find('.arrow');
var $clArrowLeft = $cl.find('.arrow.left');
var $clArrowRight = $cl.find('.arrow.right');
var $clPauseAutoPlay = $cl.find('.pause');
var $clPlayAutoPlay = $cl.find('.play');
```

Styling is no problem, just use regular CSS. But in some case you might want to change the preset styles. If you know basics in Jquery it is also supereasy.

------------------
Have Fun !

