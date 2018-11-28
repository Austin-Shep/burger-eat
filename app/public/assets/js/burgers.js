$(()=>{
    $(".devour").on("click", function(event){
        var id = $(this).attr("data-id");
        console.log(this)
        var devoured = {
            devoured: true
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devoured
        }).then(()=>{
            console.log(`user ate a burger with the id of ${id}`);

            location.reload();

        });
    });

    $(".create-form").on("submit",(event)=>{

        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: false 
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( ()=>{
            console.log(`Created a new burger, named ${newBurger.name}`); 
            location.reload();
        });
    })
})