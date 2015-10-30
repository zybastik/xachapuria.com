$(document).on('click', '#sh-footer h2', function() {
  if ($(window).width() > 800) return;
  $(this).next('.toggle').slideToggle();
});
