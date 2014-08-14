---
layout: projects-apps
title: Dineshswamy's projects and applications in his previous life
permalink: natural-language-ui-for-games
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---




<!--Natural language based computer games-->

<div class="project-container"> 
	<h2>Natural language based user interface for computer games</h2>

	<div class="short-description">
		This was my  UG final year project . Comparing the efforts , i gave all my breadth to this project . I went to all depths to make things work .
		
		This project increased my reputation among my faculties . The demo will be really cool to watch , this wont disappoint you , go ahead 

	</div>


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

	<div class="made-with-tags">
		<h2>Made using</h2>
		<a href="#">C++ </a>
		<a href="#">.SFML</a>
		<a href="#">.PYTHON</a>
		<a href="#">.HTML5</a>
		<a href="#">.NLP Tool kit</a>
	</div>
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