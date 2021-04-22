$cantPost = $(
  '<div class="cant-post" style="text-align:center"> ⚠️Your tweet is too long  or you did not enter anything, please try again ⚠️</div>'
);

$(document).ready(function () {
  console.log("FORM-SUBMIT.JS EXECUTED");
  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    let formValues = $("#tweet-text").val();
    console.log("formValues--->", formValues);

    if (formValues === "" || formValues === null || formValues.length > 140) {
      $(".compose-tweet").append($cantPost);

      return false;
    }

    if (formValues.length > 0 && formValues.length < 140) {
      $(".cant-post").remove();
    }

    $.ajax({
      url: "/tweets",
      type: "POST",
      dataType: "text",
      data: $("#tweet-form").serialize(),
    }).then(function (response) {
      console.log("RESPONSE -->", response);
      loadTweets();
    });

    //clear form with reset
    $("#tweet-form").trigger("reset");
  });
});
