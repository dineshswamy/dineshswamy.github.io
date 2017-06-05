---
layout: default
title: Dineshswamy's projects and applications in his previous life
permalink: project-apps
screenshot_hash: ['planhound','airdraw','towermapify','svcecocurricular','nlpui','bitsandbytes','ncc','code-on-me']
---

<section class="section">
<div class="container">
    <h1 class="title">Apps and Projects</h1>
    <h2 class="subtitle">
      Below are the list of apps and projects that I have worked on
    </h2>
</div>
</section>
<section class="section">
<div class="container">
{% assign all_works = "" | split: "" %}
{% for work_hash in site.data.work %}
{% assign project = work_hash[1] %}
    {% assign all_works = all_works | push: project %}
{% endfor %}
{%  assign all_works_sorted = all_works | sort: 'priority' %}
{%  assign col_count = 0 %}
{% for project in  all_works_sorted %}
    {% if col_count == 0 %} 
      <div class="columns">
    {% endif %}

      <div class="column">
      <a href="/{{ project.url }}" target="_blank">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="public/images/thumbnails/{{ project.img_url }}" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              {{ project.name }}
            </div>
          </div>
        </div>
        </a>
      </div>
      
      {% if col_count == 2 %} 
        </div>
        {%  assign col_count = 0 %}
      {% else %}
        {%  assign col_count = col_count | plus:1 %}
      {% endif %}

{% endfor %}
  

</div>
</section>



