$(document).ready(function() {
  $("#blanks form").submit(function() {

    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressLine1Input = $("input#addressLine1").val();
    var addressLine2Input = $("input#addressLine2").val();
    var cityInput = $("input#city").val();
    var state_provinceInput = $("input#state_province").val();
    var zipInput = $("input#zip").val();
    var countryInput = $("input#country").val();

    console.log("Hello");
    console.log(firstNameInput);

    $(".container").html('<h1>Transaction successful!</h1><div id="confirmation"><p>Thank you, <span class="firstName"></span> <span class="lastName"></span>, for your purchase. We will be shipping your item to <span class="addressLine1"></span> <span class="addressLine2"></span>, <span class="city">, </span>, <span class="state_province"></span> <span class="zip"></span> <span class="country"></span>. Enjoy!</p></div>');

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".addressLine1").text(addressLine1Input);
    $(".addressLine2").text(addressLine2Input);
    $(".city").text(cityInput);
    $(".state_province").text(state_provinceInput);
    $(".zip").text(zipInput);
    $(".country").text(countryInput);

    event.preventDefault();
  });
});
