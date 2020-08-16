$(function () {
    console.log("Hello");
    $(".eatBurger").on("click", function(event){
      event.preventDefault();

      var id= $(this).data("id");
      var devouredState = {
        devoured: 1
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger Devoured");
        location.reload();
      });
    });

    $("#addButton").on("click", function (event) {
      console.log("in the submit");
      event.preventDefault();
      var newBurgs = {
        burger_name: $("#nb").val().trim(),
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurgs,
      }).then(function () {
        console.log("new burger created");
        location.reload();
      });
    });
  });