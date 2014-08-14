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
	Its a CMS(Content Management System) for the intra-departmental activity <b>'Bits and Bytes'</b> </br>

	Some set of questions under a particular title will be posted by the faculty. The students can choose the title of their choice and answer the questions under the titles.</br>

	The faculty then evaluates the answer and  give scores accordingly. The toppers of each year will be displayed. The toppers are determined automatically ,based  on the no of questions they have answered and marks awarded. 	</br>

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
		<h2>Made using</h2>
		<a href="#">PHP </a>
		<a href="#">.HTML</a>
		<a href="#">.CSS</a>
		<a href="#">.Javascript</a>
		<a href="#">.Apache</a>
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