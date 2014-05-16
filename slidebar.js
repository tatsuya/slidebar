;(function($) {

  $.slidebar = function() {
    // Cache the selectors
    var $slidebar = $('.slidebar'); 
    var $expander = $('.slidebar-expander');

    // Event
    $expander.click(function(event) {
      event.stopPropagation(); // Stop event bubbling
      event.preventDefault(); // Prevent default behaviour

      $slidebar.toggleClass('slidebar-expanded');
    });
  };

})(jQuery);