//ignore this stuff (it's for the tests):
$('document').ready(function(){

/*
 *Select an element from the page and make it invisible
 */

//javascript:
document.getElementById('myElement').style.display = "none";
//jquery:
$('#myElement').hide();


/*
 * Creating and adding a new heading to the body
 */
//javascript:
var newHeading = document.createElement("h1");
newHeading.innerHTML = "Javascript";
document.getElementsByTagName('body')[0].appendChild(newHeading);

//jQuery
$('body').append( $('<h1/>').html("jQuery") );


/*
 * Add a CSS class to every div that is the child of a link
 */
 //javascript
var links = document.getElementsByTagName('a');
var link;
for (i=0;i<links.length;i++) {
   link =  links[i];
   for (j=0;j<link.children.length;j++) {
       if (link.children[j].tagName === "DIV") {
           var currentClassName = link.children[j].className;
           var newClassName;
           if (currentClass === "") {
               newClassName = "newClass";
           } else {
               newClassName = currentClassName + " newClass";
           }
           link.children[j].className = newClassName;
       }
   }
}

//jquery
$('a > div').addClass("newClass");


// OK, now which one do you like better???
iPrefer = "JQuery";
alert("I prefer " + iPrefer +"!");


//this function adds 3 to the number passed in
function addThree(x) {
    return x + 3;
}

//this function takes a function and returns
//a function that runs the function it was passed,
//and then runs that function _again_ on the return
//value of the first call to the function.
//make sense? look at it until it does.
function composed(func) {
    return function(x) {
        return func(func(x))
    }
}

composed(addThree)(4);
//what does that return?
var answer = 10;


$('#clickme').click(function() {
	alert("Goodbye Adele!");
}); 


// Scope of variables
a = 3;
b = 2;

function line(x) {
    var a = 5;
    var b = 4;
    return a*x + b
}

//b should be 17
b = line(a) - b;
alert(b);

//c should be 36
c = line(a) + b;
alert(c);
});