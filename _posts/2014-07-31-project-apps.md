---
layout: projects-apps
title: Dineshswamy's projects and applications in his previous life
permalink: project-apps
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
screenshot_hash: ['planhound','airdraw','towermapify','svcecocurricular','nlpui','bitsandbytes','ncc','code-on-me']
---

<!--Chatminion -->

<div class="project-container" > 

		<h2>Chatminion</h2>

		<div class="short-description">
			Chatminion is an ephemeral chat application for use in office . You can read about 
			
			<a href ="/chatminion" class="blog-post"><i class="fa fa-chevron-circle-right fa-3"></i> Chatminion</a> .

		</div>
		<ul class="thumbnail-holder">
		<li class="badge-holder">
			<a href="https://chrome.google.com/webstore/detail/chat-minion/ggppffbhjobdepilfllgmpojejkeemca" target="_blank">
  			<img alt="Get it on chrome web store" src="/public/images/chrome-webstore-icon.png" />
			</a>
		</li>

		<li  class="video-holder">
				
					<iframe width="400" height="250" src="//www.youtube.com/embed/CuVyldcQ0Kw" frameborder="0" allowfullscreen></iframe>
				
		</li>

		</ul> 
		
</div>














<!-- TOWERMAPIFY -->

<div class="project-container"> 
	<h2>Towermapify - coverage maps for Komparify.com</h2>

	<div class="short-description">
	This was my internship project , when i was interned at komparify.com You can read about the engineering
	challenges about the map from.<a href ="/making-towermapify" class="blog-post"><i class="fa fa-chevron-circle-right fa-3"></i> Making towermapify</a> . <a href = "http://towermapify.herokuapp.com" target="_blank" class="live-anchor"><i class="fa fa-chevron-circle-right fa-3"></i> Live </a>
	</div>
	{% assign  key = 'towermapify' %}
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
		<a href="#" class="indigo-800">Ruby on rails</a>
		<a href="#" class="indigo-800">Google maps API</a>
		<a href="#" class="indigo-800">HTML</a>
		<a href="#" class="indigo-800">CSS</a>
		<a href="#" class="indigo-800">Javascript</a>
	</div>
</div>

















{% for key  in page.screenshot_hash %}
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
{% endfor %}