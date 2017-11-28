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

  $("button.btn-light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  })

    $("button.btn-dark").click(function(){
      $("body").removeClass();
      $("body").addClass("dark-background");
    })

  $(".p1").click(function(){
    $(".p1").addClass("paragraphs");
  });

  $(".p2").click(function(){
    $(".p2").addClass("paragraphs");
  });

  $(".p3").click(function(){
    $(".p3").addClass("paragraphs");
  });

  $(".p4").click(function(){
    $(".p4").addClass("paragraphs");
  });
});
