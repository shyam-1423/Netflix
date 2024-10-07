
$(document).ready(function () {
  // Set default text
  var defaultText = $('.dropdown-menu a').first().text(); // Get the first item's text
  $('.selected-option').text(defaultText); // Set as default

  $('.dropdown-toggle').click(function () {
    $('.dropdown-menu').toggle(); // Toggle dropdown menu visibility
  });

  $('.dropdown-menu a').click(function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var value = $(this).data('value'); // Get the value from data attribute
    $('.selected-option').text($(this).text()); // Update button text
    $('.dropdown-menu').hide(); // Hide dropdown after selection
    console.log(value); // Handle the selected value as needed
  });

  // Close dropdown when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest('.dropdown').length) {
      $('.dropdown-menu').hide();
    }
  });
});

