/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




// Test / driver code (temporary). Eventually will get this from the server.

  
console.log("File loaded")
  
const tweetData = {
"user": {
  "name": "Newton",
  "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
"content": {
    "text": "If I have seen further it is by standing on the shoulders of "
  },
"created_at": 1461116232227

}


const data = [
{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png"
    ,
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
},
{
  "user": {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd" },
  "content": {
    "text": "Je pense , donc je suis"
  },
  "created_at": 1461113959088
}
]


const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
// const $test = $('.tweets-container')
let $tweets = $(tweets);
let newTweet =  null;
for (let i = 0; i < $tweets.length; i++){
  let tweetContainer = createTweetElement($tweets[i]);
  newTweet = tweetContainer;
  console.log("new tweet -->",newTweet);
}
$('.tweets-container').append(newTweet);
// return newTweet;

}
//----------------------------------------------------------------
const createTweetElement = function(tweet) {
let $tweet = $(`<article class="tweet"><article class="tweet">
<div class="boxed">
  <div class="face_name">
    <div class="padding_face_name">
      <div>
        <i class="material-icons">face</i>
        ${tweet.user.name}
      </div>
      
    </div>
    <div class="at_hover">${tweet.user.handle}</div>
    </div>
    <div>
     ${tweet.content.text}
    </div>
  </div>
  
  <hr />
  <div class="days_icons">
    <div class= "need_to_be_rendered" ><time class="timeago" datetime="2019-12-17T09:24:17Z"
    ></time
  ></div>
    <div>
      <i class="material-icons">flag</i>
      <i class="material-icons">repeat</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</article></article>`);

// ...
return $tweet;
}
//----------------------------------------------------------------
$(document).ready(function () {
renderTweets(data);

// const $tweet = createTweetElement(tweetData);

// $('.tweets-container').append($tweetss); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});


