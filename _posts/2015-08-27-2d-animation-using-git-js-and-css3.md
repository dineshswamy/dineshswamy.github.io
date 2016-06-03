---
layout: big-article-layout
title: Making a 2d animation short film with Git,JS and CSS3 -  Dinesh's logs
permalink: 2d-animation-film-using-git-js-and-css3
sidebar: no
css: ['/public/css/main.css']
---


## Why should you read this ?
There might be a day in your life where you have to make a product video with limited budget/time or you might fall in love in with the <a href="https://www.youtube.com/channel/UCsooa4yRKGN_zEE8iknghZA">TEDed videos</a> like me and wanted to create one . Okay , now watch the video.
<div class="video-holder">
<iframe width="853" height="480" src="https://www.youtube.com/embed/KzFiTgHKAtk" frameborder="0" allowfullscreen></iframe>
</div>

## Choosing the sandbox
I sat down to find the best suite of tools for making a 2d short film(
<a href="https://en.wikipedia.org/wiki/List_of_2D_animation_software">List of 2d animation software</a>).
I evaluated each one of them carefully based on its availability(free or otherwise) and learning curve it possess . I finally settled with <a href="http://www.synfig.org/cms/">Synfig</a>, but only after spending a day with it, I realized that it will work good with Linux distros and not in El capitan(newer MacOSx).
So , i iterated my skillset to find a combination that would help me. Finally i came up with the list 

> <b> Git </b> + <b>JS</b> + <b>CSS3</b> + <b>ScreenRecorderHD</b> + <b>iMovie</b> + <b>SoundRecorder</b>

## The process

1. Initialize the project folder with git.
2. Create animation with CSS3 keyframes and JS (for refined controls)
3. Use a browser in full screen and record the scene using a HD recorder
4. Add background sounds and voice over using a movie editor preferably iMovie.
5. Make a movie out of all the videos recorded

## Git Initialization
 - Initialize the folder with Git . Every scene in the short film will be a git branch
 - Every scene will definitely have common assets and functionality. All of this will go in to the master branch. For eg. In the fish story,  the background, the under ground bubbles, the clouds are going to be the same always.
 - All the scene will either checkout from the master branch or the immediate scene before it .
 - You can switch back for the scenes by checking out to different branches 

## CSS keyframes
 - CSS3's keyframes are the most underused features. It has multiple sophisticated capabilities with simple 
   syntatic structure. 
 - You can loop an animation, provide a transition to it and define what the element should like at each state.  For the bubbles that are coming out from the bottom the css is 
	- {% highlight css %} 
			.bubble {
				width: 25px;
				height: 25px;
				position: relative;
				bottom: 0px;
				display: inline-block;
				background-image:url('/public/images/blue-ball.png');
				-webkit-animation-name: bubble_moving_up; /* Chrome, Safari, Opera */
				-webkit-animation-iteration-count: infinite; /* Chrome, Safari, Opera */
				animation-name: bubble_moving_up;
				animation-iteration-count: infinite;

				}
				@keyframes bubble_moving_up {
				0%   {bottom: 0px; opacity:1;}
				100% {bottom: 200px; opacity:0;}
				}
				/* Chrome, Safari, Opera */
				@-webkit-keyframes bubble_moving_up {
				0%   {bottom: 0px; opacity:1;}
				100% {bottom: 200px; opacity:0;}
				}
   {% endhighlight %}
- This will be for one bubble , I populated the bubble using JS.
			 	<div id="bubble-holder">
					</div>
<div></div>


## Orchestration using JS
- JS is very much needed to make the co ordination between different animations of different characters.
- Listen to the key stroke and perform necessary actions. You ll feel like making an actual film shooting except you have to tell "ACTION" using your mind voice .
- Listening to the keys and doing apppropriate action is the way to do this. 
{% highlight js %}
window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (key == 38) {
      //Move the scientist fish up
  }else if (key == 40) {
      //Move all the fish to the right
  }
}
{% endhighlight %}


<div>
	<center>
		<img src="/public/images/keys-binding.jpg" class="inline-image keyboard-strokes-image" />
	</center>
</div>


## But who is recording all this ?

You need a HD screenrecorder to record whats going on the screen. Make sure you set your browser to full screen. The screen recorder is like cinematograper for your movie

## Post production 
Finally , you have to combine all the videos that was shot into a sequence of scences with narration and background music. 
You will need a video editor to do all this. iMovie (free for mac) is one of the best and has a small learning curve although .
Your movie is as good as your assets(images, css, sound).










