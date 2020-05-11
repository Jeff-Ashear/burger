$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("newEaten");

        var newEatenState = {
            eaten: newEaten
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed eaten to ", newEaten);
                location.reload();
            }
        );
    });

    $(".creat-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#inputBurger").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        $ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created a new burger!");
                location.reload();
            }
        );
    });
});