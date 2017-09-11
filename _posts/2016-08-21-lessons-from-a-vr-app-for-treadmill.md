---
layout: big-article-layout
title: Lessons from a VR app for treadmill - Dinesh swamy
banner_title: Lessons from a VR app for treadmill
bannerbg_image: vr-app-banner
permalink: lessons-from-a-vr-app-for-treadmill
sidebar: no
css: ['/public/css/main.css']
---


## Why should you read this ?
This post has shortcomings I discoverd while building a VR app for general purpose treadmills. Might help you to
validate your idea someday.

##  What is it ?
The idea is to give a VR experience for someone who is running on a treadmill. So that he or she feels like they running
in a different landscape. The visuals in the VR view will move in the same acceleration as the treadmill.
Although, thoughts of me sitting in my own office started crossing(trust me ! everyone has this :P), I discarded them (although not true :P) to do a reality check of this idea.
I googled to see whether anyone is doing the same or anyone wants something like this ?.
Found a reddit thread , where a person desperately wanted a VR app for his treadmill and he even mentioned
that this type of app has not arrived.
[Reddit - GoogleBoard](https://www.reddit.com/r/GoogleCardboard/comments/47xqgx/app_for_treadmill/)

Hmm .. thats a start. Controlling all my procrastinations (sometimes) , I started building a prototype.

<div class="juxtapose-images">
     <img src="public/images/vr_game_images/vr-for-treadmill.png" />
	<img src="public/images/vr_game_images/IMG_20160717_175625.jpg" />
</div>

##  Prototype
 Ideas kept flashing
  - the user can choose a new track everyday
  - he or she can run inside a harrypotter or Game of throne castle
  - They can see their performance right inside their visuals, a virtual coach etc</br>

 All of this is not possible at the moment. So, putting them aside, I first ordered a VR headset. </br>
 Quickly learnt Unity and how to use GoogleCardboard SDK along with it. </br>
 After several weeks and more than 100 tries, I made the prototype I wanted

<div class="video-holder">
<iframe width="853" height="480" src="https://www.youtube.com/embed/P_Z4RIul7NY" frameborder="0" allowfullscreen volume="0" ></iframe>
</div>


## Shortcomings
 - The headset itself is a problem. It is not possible to wear the headset for a long time, unless you have something immersive inside it.
   The experience will be even worse when we are running combine it with the sweat.
 - In order to make the visuals look like running in a forest, I added many trees,  mountains. Its not worth the effort , android staggers if you put
 many visuals in the VR mode.
 - The treadmill and the app do not talk to each other in any form. I have to manually input the acceleration of the treadmill into the app.
   I tried using device accelerometer and change the visuals accordingly, it didnt work.
 - I had a tough time figuring out the math between treadmill kilo meters and the terrain I developed in the visuals. Finally, gave up!.

> Notable shortcoming: it is fundamental humain trait to balance, when our body is in motion.  But in VR , your vision is
completely blocked by the headset itself and no one can guarantee that you will have a good experience. Treadmill accidents are worse.

## Biggest take away
> In my opinion, VR apps can only be built assuming the user will be stationary and not in motion. If the VR app wants the user to be in motion, then it risks the well being of user.
Although VR gives a good experience for gaming, all you can do is, just sit and look around in 360.

## Crossing the hurdles
 - I started looking for alternate headsets that are good enough for a person to wear for a long time. Like the following,

<div class="juxtapose-images">
    <img src="public/images/vr_game_images/vr-for-treamill-without-help.001.jpeg" />
	<img src="public/images/vr_game_images/cyclops-hp.gif" />
</div>


 - It was a disappointment, there was nothing like them.
 - I arrived at a conclusion that the headset I'm looking for should have correct balance between immersiveness
 and awareness about the environment. The above statement is just an informal definition of Mixed Reality stated by me :P.
  In my verdict Mixed Reality is the future and there is one clear winner when it comes to this category, MagicLeap .
 Their technology is truly revolutionary and once their headset becomes ubiquitous , survival of laptops will be a question.
 - I have signed up for their developer edition headset and started researching about what else they are doing and then this happened

 > One of my deeply regretable google search:  "Magic leap patents"

<div>
    <img src="https://dl.dropboxusercontent.com/u/41521065/24D6CCB900000578-2916696-image-a-50_1421673073442.jpg" />
</div>

- Oh dear! This looks like the tredmill idea but instead of treadmill they are using a Cycle or Bike(as they call it in bangalore) that is attached to the ground.
  Awww .. thats disappointng and discouraging.

> Magic leap patented its glass as well as the applications surrounding it .
- For now, I putting this idea in shelf, may be it will fly one day not immediately

## That being said
Because of some unavoidable circumstances I am selling my Procus VR headset :)  It is a much needed gadget for watching movies
and playing games. If anyone interested, please follow the [link](https://www.olx.in/item/new-procus-one-virtual-reality-headset-ID176l35.html)


















