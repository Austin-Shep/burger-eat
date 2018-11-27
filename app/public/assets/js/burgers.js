$(()=>{
    $(".devour").on("click", (event)=> {
        var id = $(this).data("id");
        
        var devouredState = {
            devoured: true
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devouredState
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