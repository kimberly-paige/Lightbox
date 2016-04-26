//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - lightbox

//creates a jquery object, just convention
var $overlay = $('<div id ="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//an image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);
     
//A caption
$overlay.append($caption);


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    //Update overlay with the image linked in link
    $image.attr("src", imageLocation);
  
    //Show the overlay
    $overlay.show();
     
    
    //Get childs alt attirbute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});
   

//When overlay is clicked
$overlay.click(function (){
    $overlay.hide();
});
    //Hide the overlay


