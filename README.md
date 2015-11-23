![carousel-slider.js logo](http://kit.thibaultjanbeyer.com/tools/carousel-slider.js/carousel-slider-logo.png)

# carousel-slider.js

	* VERSION: 0.1.0
 	* DATE: 2015-11-21
 	* under The MIT License (MIT)
 	* Copyright (c) 2015, Thibault Jan Beyer
	* Website: http://www.thibaultjanbeyer.com/

a simple but awesome carousel slider


Project Page: Demo, Info & Updates
-----------------------------------

http://kit.thibaultjanbeyer.com/tools/carousel-slider.js/


Key-Features
--------------------

+ Responsive & Mobile Friendly
+ Keyboard supported (arrows & space)
+ Built in Swipe gestures
+ Support multiple Sliders on one Page
+ W3C Friendly
+ Light (Only ~6KB)
+ Easy to implement
+ Easy to customize
+ Easy Fullscreen
+ Crossbrowser (Chrome, Safari, Opera, Firefox & even IE +Mobile)
+ Slide just anything
+ Free for ever & everything

![typewriter icon animation](http://kit.thibaultjanbeyer.com/tools/carousel-slider.js/typewriter.gif)

Install
---------------

Carousel-Slider.js is jQuery dependant. Add jQuery and the Carousel-Slider.js to your document:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="http://kit.thibaultjanbeyer.com/tools/carousel-slider.js/cls.min.js"></script>
```

That's it! You're ready to rock!

For the basic slider markup. In your HTML create the Carousel Slider like so:

```html
<div class="carousel-slider" data-width="250px" data-height="150px">
	<div class="inner">
		<div class="slide" style="background:lightblue">
			<div class="content">
				<p>Page 1</p>
			</div>
		</div>
		<div class="slide" style="background:lightgreen">
			<div class="content">
				<p>Page 2</p>
			</div>
		</div>
	</div>
	<div class="arrow left"> < </div>
	<div class="arrow right"> > </div>
	<p class="pause">Pause</p>
	<p class="play">Play</p>
</div>
```

In a nutshell:

+ The class "carousel-slider" indicates that this box is out slider.
+ data-width and data-height let you choose the width and height of the slider, you're not limited to px, use any unit you want. (you can always set this in CSS as well)
+ "slide" are your actual slides, color the background if you want. Copy and paste the div as many times as you want to add more slides.
+ And place all your content for a specific slide within the "content" div it does not matter what tipe of content you're using, everything will work (img, divs, iframes, svg, lists, etc etc)
+ "arrow left" and "arrow right" is the space left and right where, when you hover it, you see a part of the other slide. If you don't want to have them, you can just omit those two div's.
+ "pause" and "play" are buttons for pause and play, style them how ever you want them to have in css or replace the html text. If you don't want to have play/pause buttons just omit those two div's.


Customisation
---------------------

Each carousel slider has some options you can tweak with the help of attributes directly within html. Which makes every carousel slider on your page flexible. For example you could stop the autoplay function of one slider while maintaining it on the other. Here are all attributes you can use:

Attribute	 		| Effect
-------------		| -------------
*data-​width="…"*	 | Sets the width of that specific carousel slider. Any unit can be used. Example: data-​width="100%"
*data-​height="…"*	 | Sets the height of that specific carousel slider. Any unit can be used. Example: data-​height="150px"
*data-​autoplay="…"* | Choose wheter the carousel slider should start sliding automatically or not. true or false. Default is true. Example: data-autoplay="false"
*data-​speed="…"* 	 | Choose in milliseconds how fast the transition animation between two slides is. Any integer. Default is 1000 (1sec). Example: data-speed="2000" **Caution: data-speed should always be less than data-time**
*data-​time="…"* 	 | Choose the time between each slide in milliseconds. Any integer. Default is 7000 (7sec). Example: data-time="3000" **Caution: data-time should always be higher than data-speed**
*data-​overflow="…"* | Choose what happens if there is an overflow within a slide. Any valid CSS value. Default is auto. Example: data-time="hidden"
*data-​swipe="…"* 	 | Is swiping through with your fingers allowed (phone/tablet gesture). Default is true. Example: data-time="false"

Here is an example how the HTML would look like using all custom attributes:

```html
<div data-autoplay="false" class="carousel-slider" data-width="100%" data-height="150px" data-speed="2000" data-time="3000" data-overflow="scroll" data-swipe="true">
	<div class="inner">
		<div class="slide" style="background:lightblue">
			<div class="content">
				<p>Page 1</p>
			</div>
		</div>
		<div class="slide" style="background:lightgreen">
			<div class="content">
				<p>Page 2</p>
			</div>
		</div>
	</div>
	<div class="arrow left"> < </div>
	<div class="arrow right"> > </div>
	<p class="pause">Pause</p>
	<p class="play">Play</p>
</div>
```

Alternate Controls
---------------------

Unless you turned it off via data-swipe you can use your fingers on your mobile phone or tablet to control the carousel-slider. You can use the keyboard to control the carousel-slider as well:

⌨ Keyboard  	| What
------------- 	| -------------
*← left key* 	| Slides to the left
*→ right key* 	| Slides to the right
*[ ] space bar* | Play/Pause
------------- 	| -------------
**✌ Gestures** 	| **What**
------------- 	| -------------
*↹ tab key* 	| Select carousel sliders
*☜ left swipe*	| Slides to the left
*☞ right swipe* | Slides to the right
*☝ tap* 		| on an arrow slides respective direction

The respective carousel-slider has to be selected to read keyboard usage.

Events
---------------------

Carousel-Slider.js triggers events when an interaction takes place which you can use to implement further interactivity to your page.

Events  		| When
------------- 	| -------------
*cls-play*		| user click/tap on the play button or use spacebar
*cls-pause*		| user clicks/taps on the pause button or use the spacebar
*cls-clickLeft* | click on the left arrow
*cls-touchLeft* | touche/tap on the left arrow
*cls-swiperight*| user swipes to the right
*cls-keyLeft* 	| user press the left key
*cls-left* 		| the slide moves one slide to the left
*cls-clickright*| click on the right arrow
*cls-touchright*| touche/tap on the right arrow
*cls-swipeLeft* | user swipes to the left
*cls-keyright* 	| user press the right key
*cls-right*   	| the slide moves one slide to the right

Each Carousel-Slider.js triggers an event on it's own. You can capture and use these triggers with jQuery within your code. Here is an example:

```JSX
$('.carousel-slider').on('cls-pause',function(){
	// do Stuff when any Carousel-Slider is paused
})
```

The code above captures when any slider is paused. What you might want to do if you have added special things to the slider is to get the slide left or right of one specific slider. That's possible with the use of IDs. Here is an example:

```JSX
$('#mySlider').on('cls-right',function(){
	// do Stuff when mySlider slides one to the right 
})
```

The code above captures when a specific Carousel-Slider with the ID of mySlider is sliding one slide to the right. Happy hacking.


------------------
Check out http://kit.thibaultjanbeyer.com/tools/carousel-slider.js/ if you need more examples.

------------------
Have Fun !

