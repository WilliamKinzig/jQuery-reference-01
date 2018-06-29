$(document).ready(function() {

  $("h1").click(function() {
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
