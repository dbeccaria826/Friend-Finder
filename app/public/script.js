$('#sendInfo').click((event) => {
    event.preventDefault()
    console.log('sendInfo Works')
    const user = {
        name: $('#name').val().trim(),
        img:$('#image').val().trim(),
        scores: [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()
        ]
    }
    console.log(user)
  
    $.post("/api/friends", user, (data, status) => {
        
            if(data){
                console.log('in here')
            }

        // $('#friendName').text(friends.name)
        // $('#friendPhoto').attr("src", friends.img)
        $('#friendMode').toggle()
    })
            // $('#name').val("")
            // $('#image').val("")
            // $('#question1').val("")
            // $('#question2').val("")
            // $('#question3').val("")
            // $('#question4').val("")
            // $('#question5').val("")
            // $('#question6').val("")
            // $('#question7').val("")
            // $('#question8').val("")
            // $('#question9').val("")
            // $('#question10').val("")




})          
            

$('#close').on('click', () => {
    $('#friendMode').hide()
})