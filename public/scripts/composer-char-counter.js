// only one elemnt
$tweetTooLong = $('<div class="too-long"> Your tweet is too long</div>');
$tweetEmpty = $('<div class="too-long"> You havnt written anything yet</div>');

//----------- jquery -------------------------------------
// function is responisble for presenting user with amount they have left to be able to send a tweet
$(document).ready(function () {
  console.log("file loaded");
  let max_length = 140;
  $("#tweet-text").keyup(function () {
    let len = max_length - $(this).val().length;
    if (len < 0) {
      $(".counter").css("color", "#FF0000");
      $(".counter").text(` ${len}`);
    }
    if (len > 0 || len === 140) {
      $(".counter").css("color", "#000000");
      $(".counter").text(`${len}`);
    }
    let tweetLength = $("#tweet-text").val().length;
    if (tweetLength > 140) {
      $(".compose-tweet").append($tweetTooLong);
      console.log($tweetTooLong);
    }
    if (tweetLength === 0 || tweetLength < 140) {
      $(".too-long").remove();
    }
  });
});
//------------
