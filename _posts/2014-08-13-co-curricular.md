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
	
	I did this project for <b>Dr.SusanElias , Dean of Co-Curricular activities , SVCE</b>  , during my final year at  college.

	Managing information about co-curricular activities inside my college was very paperish , so she decided to make a web portal where each and every event  that happens inside the college gets logged into database .</br>

	Almost all details about the event gets logged , the form has 15+ fields . </br>

	Some of the highlights in this project are <b>AutoSave,ImagePreview before upload , CRUD for all information entered</b>.</br>


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
		<h2>Made using</h2>
		<a href="#">PHP </a>
		<a href="#">.HTML</a>
		<a href="#">.CSS</a>
		<a href="#">.Javascript</a>
		<a href="#">.Apache</a>
		<a href="#">.Jquery</a>
		<a href="#">.Jquery UI</a>

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