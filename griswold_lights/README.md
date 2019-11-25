# Griswold Lights

## Welcome

This is as close to a blog I will ever get.  I don't have the drive to write and manage posts.  But I do love to maintain my git repository.  So I thought I would share the experience of building a Fitbit Clockface as I learn.

## Animation

I was trying to use the fitbit animate, but I could not make the pattern robust enough.  Now I am using javascript to set the bulb patterns.  I have never created a javascript class before now.  I wanted to have a class object for holding the properties of the chistmas bulbs.  I have struggled to connect the bulbs to the UI.

## Programmaticly Add Elements

How does a Griswold hang up lights?  With as many as he can fit.  Well fitbit knew there may be a Griswold programmer accept this challenge.  When I tried the javascript createElement(), I could not get the new elements to stick.  I then found the fitbit documentation ([fitbit element](https://dev.fitbit.com/build/guides/user-interface/javascript/#hiding-showing-an-element)) that calls out that elements can not be added programatically.  Challenge Accepted!
