---
layout: projects-apps
title: Dineshswamy's projects and applications in his previous life
permalink: bits-and-bytes
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---


<!-- BITS and BYTES -->

<div class="project-container"> 
	<h2>Bits and bytes</h2>

	<div class="short-description">
		In hold CMS Used to run competitions inside my college
	</div>
	{% assign  key = 'bitsandbytes' %}
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
		<a href="#" class="green-a400">PHP</a>
		<a href="#" class="green-a400">HTML</a>
		<a href="#" class="green-a400">CSS</a>
		<a href="#" class="green-a400">Javascript</a>
		<a href="#" class="green-a400">Apache</a>
	</div>
</div>


{% assign key = 'bitsandbytes' %}
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