$.fn.blink = function(color) {
  color = color || "#F3FBFB";

  return this.each(function() {
    var $el = $(this);
    $el.css({ backgroundColor: color });
    setTimeout(function() {
      $el.animate({ backgroundColor: "#fff" }, 200);
    }, 0);
  });
};
