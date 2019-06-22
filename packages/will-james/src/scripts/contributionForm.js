import $ from "jquery";

$(function() {
  $(document).ready(function() {
    $("#fund-total-display").on("blur", function(e) {
      const $input = $(this);
      var inputVal = $input.val();
      var formattedVal = inputVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      $input.val(formattedVal);
    });
  });
});
