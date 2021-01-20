// Add a script tag to the bottom of the HTML body.
// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item".
// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.


//manipulating the dom
//manipulaating attributes

var place = document.getElementById('drake');
var firstImage = "images/drake"
place.src = "images/drake album.jpeg"

place.id = "number-1";




document.body.style.fontFamily = "Arial, sans-serif";


document.getElementById('nickname').textContent = 'Ngoc';
document.getElementById('favorites').textContent = 'snowboarding, music, food, reading';
document.getElementById('hometown').textContent = 'Denver';


var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    list[i].className = 'list-item';
}



var myPicture = document.createElement('img');
myPic.src = 'images/javascript';
// Parent node is body, child is (myPic)
document.body.appendChild(myPic);



var picture= document.createElement('img1');
picture.src="images/drake"
picture.style.width= '250px';
picture.style.height= '200px';
picture.style.border= "2px black solid";
document.appendChild (picture);



//creating DOM nodes
//document.createElement(tagName);
//document.createTextNode(text);
//document.appendChild(childtoAppend);

var body = document.body;
var newImage = document.creaeteElement('img');
newImage.src = "static.billboard.com/files/2020/03/drake-through-the-years-collage-2020-billboard-u-1500-1584128764-1024x577.jpg" alt = "Drake&#39;s 209 Hot 100 Hits, Ranked | Billboard";
newImage.style.border = '10px pink dashed';
body.appendChild(newImage);


// var logo = document.querySelector(".navbar-brand.visible-xs img");
//   img.src = 'http://www.berkeley.edu/images/uploads/logo-ucberkeley.png';
//   var header = document.querySelector('div.container-fluid.header-wrap');
//   header.style.backgroundColor = 'gold';
//   var link = document.querySelectorAll(".main-nav li a")[0];
//   link.textContent = 'About Cal';
//   link.href = 'http://www.berkeley.edu/about';
