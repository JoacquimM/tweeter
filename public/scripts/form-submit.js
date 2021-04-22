$cantPost = $(
  '<div class="cant-post" style="text-align:center"> Your tweet is too long  or you did not enter anything</div>'
);

$(document).ready(function () {
  console.log("FORM-SUBMIT.JS EXECUTED");
  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    let formValues = $("#tweet-text").val();
    console.log("formValues--->", formValues);

    if (formValues === "" || formValues === null || formValues.length > 145) {
      $(".compose-tweet").append($cantPost);
      // alert("You cant post since you didnt enter anything");
      // $(".compose-tweet").slideDown();

      return false;
    }

    if (formValues.length > 0 && formValues.length < 145) {
      $(".cant-post").remove();
      // alert("You cant post since you didnt enter anything");
      // $(".compose-tweet").slideDown();
    }

    // let newTweet = createTweetElement(tweets[i]);
    // $(".tweets-container").append(newTweet);

    $.ajax({
      url: "/tweets",
      type: "POST",
      dataType: "text",
      data: $("#tweet-form").serialize(),
    }).then(function (response) {
      console.log("RESPONSE -->", response);
      loadTweets();
      // const item = createItem(response[0])
      // $('#results').empty();
      // createItems(response);
    });
  });
});
