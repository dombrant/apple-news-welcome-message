function addClasses(){
  $(".header").addClass("slideUp");
  $(".paragraph").addClass("slideUp");
}
/*
  Adds the slideUp animation to the header
  and paragraph based on the CSS class
  This is used instead of delaying the animation
  So that the changMargin function below
  will run properly
*/

function changeMargin() {
  $(".slideUp").bind('oanimationend animationend webkitAnimationEnd', function() {
    $("h1").css("margin-top", "50px");
  });
}
/*
  A callback for the slideUp animation
  Sets the margin-top of the header
  so it doesn't slide back down after the
  slideUp animation ends
 */

function makeButtonVisible(){
  $(".slideUp").bind('oanimationend animationend webkitAnimationEnd', function() {
    $(".btn").css("visibility", "visible");
    $(".btn").addClass("fadeIn");
  });
}
/*
  Makes the buttons visible
  Also applies the fadeIn animation
 */

setTimeout(addClasses, 2200);
setTimeout(changeMargin, 2200);
setTimeout(makeButtonVisible, 2300);
/*
  Timers for each function
  The addClass function is delayed because
  otherwise the animation callback
  in changeMargin() would listen for the
  blurGrowIn animation to complete and not
  the slideUp one
  The buttons are made visible 0.1s after the
  slideUp animation is complete
 */
