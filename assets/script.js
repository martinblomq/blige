$(document).ready(function(){
	$('body').addClass('loaded');
	setTimeout(function(){
		$(document).click();
	},100);
	$(document).click(function(){
		$('.audio')[0].play();
	})

	$('.previous-blige').slick({
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		centerPadding:'2%',
		arrows:false,
		dots:true,
		autoplay:true,
		autoplaySpeed:3000,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerPadding:'5%'
			}
		}
		]
	})
});

(function($) {

  $.fn.visible = function(partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

$(window).scroll(function(event) {

  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in-scroll"); // Not visible
      el.css('visibility', 'visible'); // Visible
    }
  });

});