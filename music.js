$(document).ready(function () {
  $(".mp3").hide();
});

$(document).ready(function () {
  $("#button").click(function () {
    $(".mp3").fadeToggle(500);
  });
});
