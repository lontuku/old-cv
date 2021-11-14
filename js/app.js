window.addEventListener('scroll', function(){
  let navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
})

$('.nav-burger').click(function() {
  $('.nav-menu').toggleClass('closed');
  $('.burger-button').toggleClass('change');
});

$('.nav-item').click(function() {
  $('.nav-menu').toggleClass('closed');
  $('.burger-button').toggleClass('change');
});

var direction_i = 0,
 $window = $(window);

$(document).scroll(function() {
  hr_scroll();
});

hr_scroll();

function hr_scroll() {
  var scroll_top = $window.scrollTop(),
      direction = (scroll_top > direction_i) ? 'up' : 'down',
      direction_i = scroll_top;

  $('hr').each(function() {
    var $this = $(this),
        from_top = $this.offset().top - scroll_top - 300,
        is_activated = $this.hasClass('activated');
    
    if (from_top < 300 && from_top > 0) {
      if (is_activated) {
        $this.removeClass('activated');
      }
      $this.css('width', (100 - (from_top/300) * 100) + '%');
    }

    if (from_top <= 0 && !is_activated) {
      if (direction === 'down') {
        $this.addClass('activated');
      }
    }
    
  });
}