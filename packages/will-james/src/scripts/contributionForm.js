import $ from "jquery";

$(function() {
  $(document).ready(function() {
    $("#fund-total-display").on("blur", function(e) {
      const $input = $(this);
      var inputVal = $input.val();
      if (inputVal === "") {
        inputVal = "500";
      }
      var inputVal = parseFloat(inputVal)
        .toFixed(2)
        .toString();
      var formattedVal = inputVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      $input.val(formattedVal);
    });

    $(".numbersonly").on("keydown", function(e) {
      var key = e.keyCode ? e.keyCode : e.which;

      if (
        !(
          [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
          (key == 65 && (e.ctrlKey || e.metaKey)) ||
          (key >= 35 && key <= 40) ||
          (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
          (key >= 96 && key <= 105)
        )
      )
        e.preventDefault();
    });
  });
});
