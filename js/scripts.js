$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".fadeable").click(function() {
    $("#walrus-fade-in").fadeToggle();
    $("#walrus-fade-out").fadeToggle();
  });
});

$(document).ready(function() {
  $(".slideable").click(function() {
    $("#walrus-slide-down").slideToggle();
    $("#walrus-slide-up").slideToggle();
  });
});