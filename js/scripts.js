$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#florida-showing").toggle();
    $("#florida-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#mexicocity-showing").slideToggle();
    $("#mexicocity-hidden").slideToggle();
  });
  $(".clickable3").click(function() {
    $("#tiger-showing").fadeToggle();
    $("#tiger-hidden").fadeToggle();
  });
});
