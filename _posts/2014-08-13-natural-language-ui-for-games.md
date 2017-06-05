---
layout: default
title: Natural language based user interface for Computer games
permalink: natural-language-ui-for-games
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---




<!--Natural language based computer games-->

<div class="content">
<div class="project-container"> 
	<h2>Natural language based user interface for computer games</h2>

	<p>

		                 If you take a look at the existing interfaces for computer games, they are primarily hardwares such as keyboard, mouse and joystick.
		                 So , in this project we use natural language as an user interface for playing computer games.
		                 </br></p>
		                 <p>The player will be playing the game with his natural language. The <strong>natural language statements</strong> are given through his voice(from microphone).</p>
<p>The player can communicate to the 
characters(bots) inside the game.The 
<strong>characters will communicate back and 
forth </strong>
Have a look at the video , for more details . i m sure you wont be disappointed :) 
</p>
	<h4>
	Made using
		#C++
		#SFML
		#PYTHON
		#HTML5
		#NLP Tool kit
	</h4>



	{% assign  key = 'nlpui' %}
	{% assign screenshots = site.data.project_apps_data[key] %}
	{% if screenshots.size > 0 %}
	<ul class="thumbnail-holder" >
	{% for screenshot in screenshots %}
		
	<li>
		<a class="fancybox thumbnails" href="#{{ key }}-{{ screenshot.id}}">
			<div class="description">	
				<img src="/public/images/screenshots/{{ screenshot.thumbnail }}" /> 
			</div>
		</a>		
	</li>

	{% endfor %}

	</ul> 
	{% endif %}

	<center>
	
	<div class="video-holder">
			<iframe width="640" height="360" src="//www.youtube.com/embed/Wi9xl4w7NOU" frameborder="0" allowfullscreen></iframe>
	</div>

	</center>
</div>


{% assign key = 'nlpui' %}
{% assign screenshots = site.data.project_apps_data[key] %}
{% for screenshot in screenshots %}

<div id="{{ key }}-{{ screenshot.id}}" style="display: none;" class="description-holder">
		<div class="screenshot-description" >
			<ul>
			{% for desc in screenshot.description %}
			<li>
				{{ desc }}
			</li>
			{% endfor %}
			</ul>
		</div>
		<img class="lazy" data-src="/public/images/screenshots/{{ screenshot.original }}" /> 
</div>
{% endfor %}
</div>
