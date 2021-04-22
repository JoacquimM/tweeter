// $(document).ready(function () {
// let text = document.querySelector("#tweet-text");
// $("#tweet-text").on("input",()=>{
//   console.log($("tweet-text").value);

// })

// });
// only one elemnt
$tweetTooLong = $('<div class="too-long"> Your tweet is too long</div>');
$tweetEmpty = $('<div class="too-long"> You havnt written anything yet</div>');
// $errorElement = $('<span class="too-long"> </span>')
//.html("error message")
//----------- jquery -------------------------------------
$(document).ready(function () {
  console.log("file loaded");
  let max_length = 145;
  $("#tweet-text").keyup(function () {
    let len = max_length - $(this).val().length;
    // console.log($(this).val());
    $(".counter").css("color", "#FF0000");
    $(".counter").text(` ${len}`);

    if (len === 145) {
      $(".counter").css("color", "#000000");
      $(".counter").text(`${len}`);
    }

    let tweetLength = $("#tweet-text").val().length;

    if (tweetLength > 145) {
      $(".compose-tweet").append($tweetTooLong);
      console.log($tweetTooLong);
      // $('.too-long').html( "<p>Your tweet is too long</p>" );
    }

    if (tweetLength === 0) {
      // $('.compose-tweet').append($tweetEmpty);
      $(".too-long").remove();
      // $('.too-long').html( "<p>You havnt written anything yet</p>" );
    }
  });
});
//------------

//------------  vanilla js --------------------------------
// document.addEventListener('DOMContentLoaded', function () {
//   let max_length = 145;
//  let txt = document.getElementById('tweet-text');
//  txt.addEventListener('keyup', function (ev){
//     //  console.log(ev, "THIS IS WORKING")
//     let target = ev.currentTarget;
//     let len = max_length - this.value.length;
//     const counter = document.querySelector('.counter')
//     counter.style.color = '#FF0000';
//     counter.textContent = `-${max_length - this.value.length}`
//     if(len === 145){
//       counter.style.color = '#000000'
//       counter.textContent = `${max_length - this.value.length}`
//     }
//     console.log(len);

//  })
// })
