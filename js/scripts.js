$(document).ready(function() {

  $("p").click(function() {
    // $(".walrus-showing").show();
    // $(".walrus-hidden").hide();
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $("#walrus").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
// To use the jQuery Methods fadeIn(), fadeOut(), slideDown(), or slideUp() you will need two separate click() JavaScript events (One for the in/out or down/up) whereas toggle() only requires one click() event.
  // fadeIn()
  // fadeOut()
  // fadeToggle()
  // slideDown()
  // slideUp()
  // slideToggle()


});
