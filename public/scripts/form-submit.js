//jquery variables whic contains teh html to be renedered as a result of validation of user input
$cantPost1 = $(
  '<div class="cant-post1" style="text-align:center"> ⚠️Your tweet is too long, please try again ⚠️</div>'
);
$cantPost2 = $(
  '<div class="cant-post2" style="text-align:center"> ⚠️You did not enter anything, please try again ⚠️</div>'
);

// function below resposible for making a post request to teh back endpoint
// also checks as validation for user submittion, if it fails user is presented with apprprate message.
$(document).ready(function () {
  console.log("FORM-SUBMIT.JS EXECUTED");
  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    let formValues = $("#tweet-text").val();
    console.log("formValues--->", formValues);

    // renders warning - too long
    if (formValues.length > 140) {
      $(".compose-tweet").append($cantPost1);
      $(".cant-post2").remove();
      return false;
    }
    // renders warning - nothing entered
    if (formValues === "" || formValues === null) {
      $(".compose-tweet").append($cantPost2);
      $(".cant-post1").remove();

      return false;
    }
    // removes warnings
    if (formValues.length > 0 && formValues.length < 140) {
      $(".cant-post1").remove();
      $(".cant-post2").remove();
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

    //clear form with reset / resets counter
    $("#tweet-form").trigger("reset");
    $(".counter").html("140");
  });
});
