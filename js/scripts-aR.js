$(document).ready(function() {

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  // ALTERNATIVE METHOD
  // $("button#green").click(function() {
  //   $("body").css("background-color", "green");
  // });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

    // $("button#green").click(function() {
    //   $("body").addClass("green-background");
    // });
    //
    // $("button#yellow").click(function() {
    //   $("body").addClass("yellow-background");
    // });
    //
    // $("button#red").click(function() {
    //   $("body").addClass("red-background");
    // });


  // $("p").click(function() {
  //   // $(".walrus-showing").show();
  //   // $(".walrus-hidden").hide();
  //   $(".walrus-showing").toggle();
  //   $(".walrus-hidden").toggle();
  // });

});
