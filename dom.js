// takes string argument and returns the one element with a matching ID
//var id = document.getElementById("highlight");

// takes string argument and returns a list of elements that have a matching class (list is not an actual array, but an HTMLCollection)
//var classes = document.getElementsByClassName("bolded");

// returns list of elements that have a matching tag
//var tags = document.getElementsByTagName("li");

// returns the FIRST element that matches a given CSS-style selector as input
// can do everything we did above as long as we use CSS syntax in the input
// var tag = document.querySelector("#highlight");
// var tag = document.querySelector(".bolded");
// var tag = document.querySelector("h1");
// won't work with this exercise, but as an example...
// select all anchor tags inside li with class="special"
// var tag = document.querySelector("li a .special")

// returns a list of all matches
// var tags = document.querySelectorAll("h1");

var tag = document.getElementById("highlight");
// every DOM element object has a style property, which is another object with all the css properties
// will help us with manipulating the style
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// separation of concerns: don't want our javascript, html, css to have a lot of overlap
// the above method where we're changing the styles inside the javascript file violates separation of concerns
// instead, create a class in css file with these styles, and in javascript, change the class of the element to
// have this class; keep these functions separate
// refer to css file, also have a better name 
tag.classList.add("some-class");

var tag2 = document.querySelector("h1");
tag2.classList.add("another-class");
// remove a class
tag2.classList.remove("another-class");
// toggle a class - if tag has class, will remove, vice versa
tag2.classList.toggle("another-class");

// will give list of classes; not typical array ie can't usual array methods
tag2.classList


// text manipulation; changing the content of the tag
var ptag = document.querySelector("p");
// retrieve textContent, but if there are tags inside content like strong tags, won't include these
ptag.textContent;
// alter textcContent
ptag.textContent = "blah blah blah"
// to maintain html elements when we're retrieving content, use:
ptag.innerHTML
// need to use .innerHTML if setting html inside text; if we use textContent, will make html as part of the string
ptag.innerHTML = "blah <strong>blah</strong> blah"


// attribute manipulation
var link = document.querySelector("a");
link.getAttribute("href");
// change href attribute
link.setAttribute("href", "www.fakesite.com");

var img = document.querySelector("img");
// change the image source
img.setAttribute("src", "corgi.png")
