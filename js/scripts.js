$(document).ready(function() {
  $(".green").click(function() {
    $("body").addClass("green-theme");
    $("body").removeClass("blue-theme");
  });

  $(".blue").click(function(){
    $("body").addClass("blue-theme");
    $("body").removeClass("green-theme");
  });

});
