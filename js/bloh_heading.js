$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top23");
        $nav.toggleClass('scrolled', $(this).scrollTop() > -5);
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });
      
  });