// show more button functionality for EXPERIENCE
// $(document).ready(function () {
//   $('#exp-show-more-btn').click(function () {
//     $('#exp-show-more-btn').css('display', 'none');
//     $('#experience-showMore-cont').slideDown('slow');
//   });

//   $('#exp-show-less-btn').click(function () {
//     $('#experience-showMore-cont').slideUp('show');
//     $('#exp-show-more-btn').css('display', 'inline-block');
//   });

$(document).ready(function () {
  $("#exp-show-more-btn").click(function () {
    $("#experience-showMore-cont").toggle("slow");
    $("#exp-show-more-btn").toggle();
  });

  $("#exp-show-less-btn").click(function () {
    $("#experience-showMore-cont").toggle("slow");
    $("#exp-show-more-btn").toggle();
  });
});

// show more button functionality for PROJECTS

$("#projects-show-more-btn").click(function () {
  $("#projects-show-more-btn").css("display", "none");
  $("#projects-showMore-cont").slideDown("slow");
});

$("#projects-show-less-btn").click(function () {
  $("#projects-showMore-cont").slideUp("show");
  $("#projects-show-more-btn").css("display", "inline-block");
});

// show more button functionality for awards
$("#awards-show-more-btn").click(function () {
  $("#awards-show-more-btn").css("display", "none");
  $("#awards-showMore-cont").slideDown("slow");
});

$("#awards-show-less-btn").click(function () {
  $("#awards-showMore-cont").slideUp("show");
  $("#awards-show-more-btn").css("display", "inline-block");
});

// navtop toggle bar icon

$("#toggle-btn").click(function () {
  $("#toggle-show-section").toggleClass("toggle-display-inline-b");
  $("#nav-links-m").toggleClass("toggle-display-inline-b");
  $("#home-id").toggleClass("home-margin-reduce-toggle");
  $("#header-id").toggleClass("header-width-toggle");
});
// });
