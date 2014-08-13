---
layout: projects-apps
title: Towermapify - Coverage maps for komparify.com
permalink: towermapify
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---
<div class="post">
  <h1 class="post-title">{{ page.title }}</h1>
</div>
This blog post is about my internship project at komparify.co and  the development challenges i've encountered in making this.

-----



<div class="project-container"> 
	

	<div class="short-description">
	 <a href = "http://towermapify.herokuapp.com" target="_blank" class="live-anchor"><i class="fa fa-chevron-circle-right fa-3"></i> Its Live Here </a>
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
</div>






## What towermapify does ?
Towermapify is a coverage map. The objective is to map  coverage strength of all the operators in india .
Whether they provide 3G or 4G or HSIA(high speed internet connectivity) in a particular region . If a user
needs to know whether 3G/4G/HSIA is available in a region ? or How good the coverage strength of particular operator is ? , the information can be found .

<a href="http://towermapify.herokuapp.com" target="_blank">Towermapify</a>


## 1 internship month =  1 prototype throwaway + 1 Production version

When i was briefed about the project , neither of us had no clue how we are going to do this .We only had data required for the map .

We started with Google Maps API combined with Google FusionTables . Your data will be hosted by the Google Servers .It will provide REST FULL apis to access the data . You need to write a client(HTML+CSS+JS) where you need to handle the data and put them in Map.

###Growing requirements
Once i got a prototype working , the requirements at komparify.com started growing , we badly required many features . But Fusion tables are not enough as they had limitations.
	
For example : You cant do a "OR" in the SQL query you send .Your table should be publicly available .

###Thrown far far away
So days and days of work was thrown away and we finally settled down to define development stack.We decided use our own servers and make restful apis for data .

##Towermapify - Built on
	
* Ruby on Rails 
* Google maps API V3
* KML/JSON
* HTML+CSS+JS
* Rails Cells integration 
* MySQL

##OverQuery algorithm

###Problem (A)
We have a huge data containing latitude and longitude information of places all over india . if we
drop markers for all the places , it will do a catastropic damage to the performance,browser.
Takes huge memory , not a good idea.

###Work around (A)
So , to decide what markers to drop . we get the bounding edges south west and north east of the map . With that , the query is for only the  places that resides inside the bounding box and then query again when the user does panning inside the map , with the new bounding box

###Problem (B)
The way we find the new bounding box after the user pans is by listening to the map-events . But the problem is that map-events fire for every small pan or zoom , making navigation inside maps terrible . If the mouse is just shaken inside the map , it does a query for the new bounding box and drops the markers again , giving a terrible user experience .
Also , server-client IO will be high .

###Work around (B)
This is the place where we went back to the drawing board and started writing rules that minimizes no of requests to the server and gives a good user experience .

###Overquery
My boss and co-founder of komparify.com Jigar doshi , formulated this approach.He knew of this approach thourgh his
experience at Amazon.com .

Whenever  a query for the bouding box(Lets call it **box original** )  to get lat/lng for the markers is made , we have to add a delta value to that bounding box(Lets call it **box modified** ) . So the results from server includes results of a bigger bounding box. 
	
> **box original** < **box modified**


![My helpful screenshot](/public/images/overquery_map.png)

When the user pans within the **box modified** , no need for querying since we already have the results fetched during the previous query. Only when the user pans outside the **box modified** we need to query again , which again follows the same procedure as above .

So,now when the user pan around the map ,the panning will be smooth and thats how **Problem(b)** was solved

###Performance Boost

We were very close to put this into production and then we started looking under the hood. The latency was not really high but notable .

The reason behind this is the data-exchange format we had , it was **KML(Keyhole markup language)** . we used this because 
there was a pretty KML parser( :P )  available so it is was easy for us to handle data.

we switched from KML to JSON , and this gave us a solid decrease in the latency.Of course , few big parts of the app has to be
rewritten and i did that too. I wrote the **full stack(client+server)** so it was not hard for me.



###Finally we shipped 
The app exists in **rails-cells** integration inside komparify.com . Also , i have a version hosted here 
<a href="http://towermapify.herokuapp.com" target="_blank">Towermapify</a>
-----



{% assign key = 'towermapify' %}
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