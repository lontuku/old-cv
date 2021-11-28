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

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();
  // top position relative to the document
  var pos = $id.offset().top - 80;
  
  // animated top scrolling
  $('body, html').animate({scrollTop: pos}, 50);
});


//formulario
let good = $('#good');
let fail = $('#fail');

$(document).on('click', function(event) {
  if (good.css('display') == 'grid') {
    modal = good;
  }
  else if (fail.css('display') == 'grid') {
    modal = fail;
  };
  if (typeof modal !== 'undefined') {
    if (!$(event.target).closest(".modal-content, .send").length || event.target.className == 'close-btn') {
      modal.css('opacity', '0');
      modal.one('transitionend', function() {
        modal.css('display', 'none');
        modal.css('opacity', '1');
      });
    };
  };
});

$('#theform').submit(function(event) {
  event.preventDefault();
  var form = $(this);
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize()
    }).done(function(data) {
      good.css({
        'opacity': '1',
        'display': 'grid',
        'place-items': 'center',
      });
    }).fail(function(data) {
      fail.css({
        'opacity': '1',
        'display': 'grid',
        'place-items': 'center',
      });
    });
});

