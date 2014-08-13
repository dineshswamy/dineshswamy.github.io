---
layout: projects-apps
title: Dineshswamy's projects and applications in his previous life
permalink: planhound
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---


<!--PLANHOUND -->

<div class="project-container" > 

		<h2>Planhound</h2>
	
		<div class="badge-holder">
			<a href="https://play.google.com/store/apps/details?id=com.threegsimplified.planhound" target="_blank">
  			<img alt="Get it on Google Play" src="/public/images/en_generic_rgb_wo_60.png" />
			</a>
		</div>
	
		<div class="short-description">
			Planhound is the android app , i was working ever since i joined komparify.com. You can read all about the app here
		</div>
		{% assign  key = 'planhound' %}
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
			<a href="#" class="red-600">Android SDK</a>
			<a href="#" class="red-600">Volley</a>
			<a href="#" class="red-600">Gradle</a>
			<a href="#" class="red-600">Google Cloud Messaging</a>
		</div>
</div>
{% assign key = 'planhound' %}
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