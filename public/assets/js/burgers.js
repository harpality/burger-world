$(function() {
  $(".devour").on("click", function(event) {
    let id = $(this).data("id");
    console.log(id);
    var devoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(function() {
      console.log("burger devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
