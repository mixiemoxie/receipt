$(document).ready(function() {
  $("#blanks form").submit(function() {

    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var dateInput = $("input#date").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

    console.log("Hello");
    console.log(firstNameInput);

    $(".container").html('<h1>Your booking was successful!</h1><div id="confirmation"><p>Thank you, <span class="firstName"></span> <span class="lastName"></span>, for booking with us. You are confirmed for <span class="date"></span> at <span class="startTime"></span>-<span class="endTime"></span>. We look forward to seeing you!</p></div>');

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    event.preventDefault();
  });
});
