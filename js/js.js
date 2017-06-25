$(document).ready(function() {
  widths = $('.works figure img');

  for (var i=0;i<widths.length;i++){
    var img = widths[i];
    $(img).css("height",img.width);
  }
});
