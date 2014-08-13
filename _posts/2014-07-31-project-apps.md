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









<!--PLANHOUND -->

<div class="project-container" > 

		<h2>Planhound</h2>

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
		
		<li class="badge-holder">
			<a href="https://play.google.com/store/apps/details?id=com.threegsimplified.planhound" target="_blank">
  			<img alt="Get it on Google Play" src="/public/images/en_generic_rgb_wo_60.png" />
			</a>

		</li>

		</ul> 
		{% endif %}

		<div class="made-with-tags">
			<a href="#" class="red-600">Android SDK</a>
			<a href="#" class="red-600">Volley</a>
			<a href="#" class="red-600">Gradle</a>
			<a href="#" class="red-600">Google Cloud Messaging</a>
		</div>
</div>

<!--Airdraw -->

<div class="project-container" > 

		<h2>Airdraw - scribble in the air</h2>

		<div class="short-description">
		Hackathon app that got Samsung tablet . I made this app at DROIDCON 2013 and got SECOND PRIZE.
		You can watch the demo of the app here .
	
		<i class="fa fa-github fa-4"></i><a href="https://github.com/dineshswamy/AirDraw" class="blog-post"> Airdraw</a>

		</div>
		{% assign  key = 'airdraw' %}
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
		
		<li  class="video-holder">
				
					<iframe width="400" height="250" src="//www.youtube.com/embed/36Eh-LIb0IA" frameborder="0" allowfullscreen></iframe>
				
		</li>

		</ul> 
		{% endif %}
	

		
		<div class="made-with-tags">
			<a href="#" class="red-600">Android SDK</a>
			<a href="#" class="red-600">Sony smartwatch SDK</a>
		</div>


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


<!--NCC ARMY -->

<div class="project-container"> 
	<h2>E learning website of NCC ARMY</h2>

	<div class="short-description">
		This is one of the first website i wrote and i did that with lot of passion for indian army . i created a tutorial system where one can learn all NCC commands .
	</div>
	{% assign  key = 'ncc' %}
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