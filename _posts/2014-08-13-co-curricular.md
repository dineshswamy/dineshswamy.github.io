---
layout: projects-apps
title: Dineshswamy's projects and applications in his previous life
permalink: co-curricular
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---




<!--SVCE CO-CURRICULAR -->

<div class="project-container"> 
	<h2>Information management system for SVCE Co-curricular activities</h2>

	<div class="short-description">
	This is did during my final year at college burning all my free time . But i ve gained lot of experience
	doing this.
	</div>
	{% assign  key = 'svcecocurricular' %}
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

	<div class="made-with-tags">

		<a href="#" class="indigo-800">Bootstrap</a>
		<a href="#" class="indigo-800">PHP</a>
		<a href="#" class="indigo-800">HTML</a>
		<a href="#" class="indigo-800">CSS</a>
		<a href="#" class="indigo-800">Javascript</a>
		<a href="#" class="indigo-800">Apache</a>
	</div>
</div>


{% assign key = 'svcecocurricular' %}
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