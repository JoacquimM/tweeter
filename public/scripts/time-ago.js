

// document.addEventListener('DOMContentLoaded', function (){
//   timeago.render(document.querySelectorAll('.need_to_be_rendered'));
//   timeago.format(new Date());  
// })

$(document).ready(function(){
  // const tag = timeago.format(new Date()); 
  $("time.timeago").timeago();
  ;
  // alert(tag);
  // console.log("Test..........", tag)
  // $("time.need_to_be_rendered").timeago();
  // timeago.render(document.querySelectorAll('.need_to_be_rendered'));
});