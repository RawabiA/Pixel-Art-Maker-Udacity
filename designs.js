// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const canvas = $("#pixel_canvas");
const colorPicker = $("#colorPicker");
//Erase previous canvas
function resetGrid(){
    $('canvas').empty();
}
function makeGrid(){
  var width = $("input_width").val();
  var height = $("input_height").val();
for (x = 0; x <= height; x++) {
  let li = $("<tr></tr>");
  $('canvas').append(li);
  for (y = 0; y <= width; y++) {
    li.append("<td></td>");
  }
}
makeGrid(height.val(), width.val());
});
// Color
var color = $("input[type='color']").val();
}
}
