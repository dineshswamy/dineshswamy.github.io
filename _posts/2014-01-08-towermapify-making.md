---
layout: default
title: Towermapify - Coverage maps for komparify.com
permalink: towermapify
css: ['/public/css/project-apps.css','/public/font-awesome-4.1.0/css/font-awesome.min.css']
---
<section class="section">
<div class="content">
	<div class="post">
	  <h1 class="post-title">{{ page.title }}</h1>
	</div>
This blog post is about my internship project at komparify.co and  the development challenges i've encountered in making this.

-----



<div class="project-container"> 
	<div class="short-description">
	 <a href = "http://towermapify.herokuapp.com" target="_blank" class="live-anchor"><i class="fa fa-chevron-circle-right fa-3"></i>See the app</a>
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

<h2>What towermapify does ?</h2>
<p>
Towermapify is a coverage map. The objective is to map  coverage strength of all the operators in india.
Whether they provide 3G or 4G or HSIA(high speed internet connectivity) in a particular region . If a user
needs to know whether 3G/4G/HSIA is available in a region ? or How good the coverage strength of particular operator is ? , the information can be found .
</p>
<a href="http://towermapify.herokuapp.com" target="_blank">towermapify</a>


<h2> 1 internship month =  1 prototype throwaway + 1 Production version </h2>

<p>
When i was briefed about the project , neither of us had no clue how we are going to do this .We only had data required for the map.

We started with Google Maps API combined with Google FusionTables . Your data will be hosted by the Google Servers .It will provide REST FULL apis to access the data . You need to write a client(HTML+CSS+JS) where you need to handle the data and put them in Map. </p>

<h2>Growing requirements</h2>
<p>Once i got a prototype working , the requirements at komparify.com started growing , we badly required many features . But Fusion tables are not enough as they had limitations.
	
For example : You cant do a "OR" in the SQL query you send .Your table should be publicly available.
</p>

<h2>Thrown far far away</h2>
<p>So days and days of work was thrown away and we finally settled down to define development stack.We decided use our own servers and make restful apis for data.</p>

<h2>Towermapify - Built on</h2>
<p>	
* Ruby on Rails 
* Google maps API V3
* KML/JSON
* HTML+CSS+JS
* Rails Cells integration 
* MySQL
</p>

<h2>OverQuery algorithm</h2>

<h3>Problem (A)</h3>
<p>We have a huge data containing latitude and longitude information of places all over india . if we
drop markers for all the places , it will do a catastropic damage to the performance,browser.
Takes huge memory , not a good idea.</p>

<h3>Work around (A)</h3>
<p>So , to decide what markers to drop . we get the bounding edges south west and north east of the map . With that , the query is for only the  places that resides inside the bounding box and then query again when the user does panning inside the map , with the new bounding box</p>

<h3>Problem (B)</h3>
<p>The way we find the new bounding box after the user pans is by listening to the map-events . But the problem is that map-events fire for every small pan or zoom , making navigation inside maps terrible . If the mouse is just shaken inside the map , it does a query for the new bounding box and drops the markers again , giving a terrible user experience .
Also , server-client IO will be high. </p>

<h3>Work around (B) </h3>
<p>This is the place where we went back to the drawing board and started writing rules that minimizes no of requests to the server and gives a good user experience.</p>

<h3>Overquery</h3>
<p>My boss and co-founder of komparify.com Jigar doshi , formulated this approach.He knew of this approach thourgh his experience at Amazon.com. </p>
<p>
Whenever  a query for the bouding box(Lets call it **box original** )  to get lat/lng for the markers is made , we have to add a delta value to that bounding box(Lets call it **box modified** ) .So the results from server includes results of a bigger bounding box.</p>
	
<h3> box original < box modified </h3>


<img src="/public/images/overquery_map.png" />

<p>When the user pans within the <b>box modified</b> , no need for querying since we already have the results fetched during the previous query. Only when the user pans outside the <b>box modified</b> we need to query again , which again follows the same procedure as above .

So,now when the user pan around the map ,the panning will be smooth and thats how <b>Problem(b)</b> was solved</p>

<h2>Performance Boost</h2>

<p>We were very close to put this into production and then we started looking under the hood. The latency was not really high but notable .

The reason behind this is the data-exchange format we had , it was <b>KML(Keyhole markup language)</b> . we used this because 
there was a pretty KML parser( :P )  available so it is was easy for us to handle data.

we switched from KML to JSON , and this gave us a solid decrease in the latency.Of course , few big parts of the app has to be
rewritten and i did that too. I wrote the <b>full stack(client+server)</b> so it was not hard for me.
</p>


<h2>Finally we shipped </h2>
<p>The app exists in <b>rails-cells</b> integration inside komparify.com . Also , i have a version hosted here </p>
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

</div>
</section>