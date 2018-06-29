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



});
