$(document).ready(function() {
  const table = $("#pixel_canvas");
  $("input:submit").click(function(event) {
    event.preventDefault(); //prevents refresh
    makeGrid(); //clicking the submit button calls the  makeGrid funktion
  });
  $("#clear").on("click", function(evt) {
    $("#pixel_canvas").empty();
  }); //clears the Grid
  // Making the Grid
  function makeGrid() {
    var row = $("#input_height").val();
    var column = $("#input_width").val();

    for (let x = 0; x < row; x++) {
      table.append("<tr></tr>");
      for (let y = 0; y < column; y++) {
        $("tr")
          .last()
          .append("<td></td>");
      }
    }
  }
  //Let's paint!
  var paint = table.on("click", "td", function() {
    var color = $("#colorPicker").val();
    $(this).attr("bgcolor", color);
  });
  //the double click
  var erase = table.on("dblclick", "td", function() {
    $(this).attr("bgcolor", "#ffffff");
  });
});
