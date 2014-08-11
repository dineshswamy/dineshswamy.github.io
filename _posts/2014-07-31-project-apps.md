---
layout: projects-apps
title: Dineshswamy's projects and applications in his previous life
permalink: project-apps
css: [project-apps]
screenshot_hash: ['planhound','airdraw','towermapify','svcecocurricular','nlpui','bitsandbytes','ncc','code-on-me']

---




{% for key  in page.screenshot_hash %}
{% assign screenshots = site.data.project_apps_data[key] %}
{% if screenshots.size > 0 %}
<ul class="thumbnail-holder">
{% for screenshot in screenshots %}
	
	<li>
		<a class="fancybox " href="#{{ key }}-{{ screenshot.id}}">
			<div class="description">	
				<img src="/public/images/screenshots/{{ screenshot.thumbnail }}" /> 
			</div>
		</a>		
	</li>

{% endfor %}

</ul> 
{% endif %}
{% endfor %}





{% for key  in page.screenshot_hash %}
{% assign screenshots = site.data.project_apps_data[key] %}
{% for screenshot in screenshots %}

<div id="{{ key }}-{{ screenshot.id}}" style="display: none;">
		<div class="screenshot-description" >
			<ul>
			{% for desc in screenshot.description %}
			<li>
				{{ desc }}
			</li>
			{% endfor %}
			</ul>
		</div>
	<img src="/public/images/screenshots/{{ screenshot.original }}" />
</div>

{% endfor %}
{% endfor %}