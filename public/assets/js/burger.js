$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    console.log(id +" "+newDevour)
    var newDevourState = {
      devoured: "true"
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      devoured: newDevourState
    }).then(
      function () {
        location.reload();
      }
    )
  });
  $("#new_burger").on("click", function () {
    location.reload();
  })
});

