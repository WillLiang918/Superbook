$.fn.blink = function(color) {
  color = color || "#F9FDC8";

  return this.each(function() {
    var $el = $(this);
    $el.css({ backgroundColor: color });
    setTimeout(function() {
      $el.animate({ backgroundColor: "#fff" }, 200);
    }, 0);
  });
};
