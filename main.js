$(document).ready(function() {
    
    $('form').on('submit', (e) => {
        e.preventDefault();

        const newTask = $('#inputTask').val()
        
        const newItem = $('<li></li>')

        $(`<label> ${newTask} </label>`).appendTo(newItem)

        $(newItem).appendTo('ul')
        
        $(newItem).click(function () { 
            if ($(this).css('text-decoration', 'line-through')) {
                
            } else {
                $(this).css('text-decoration', 'none')
            }
        })

        $('#inputTask').val('')
    })
})
