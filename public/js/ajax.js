$(document).ready(function () {
    console.log("xxx");
    $("#username").on('keyup', function (e) {
        e.preventDefault();
        var data = $('#username').val();
        console.log(data);
        $.ajax({
            url: '/user/checkUN',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username: data }),
            success: function (response) {
                $('#unresult').html('username is ' + response);

                if (response == 'taken') {
                    $('#unresult').css("color", "red");
                }
                else {
                    $('#unresult').css("color", "green");
                }
            },
            error:function(err){

            }
        });
    });
});


// $(document).ready(function () {
//     $("#email").on('keyup', function (e) {
//        e.preventDefault();
//         var data = $('#email').val();
//         $.ajax({
//             url: '/user/checkEmail',
//             method: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify({ email: data }),
//             success: function (response) {
//                 $('#emailresult').html('email is ' + response);

//                 if (response == 'taken') {
//                     $('#emailresult').css("color", "red");
//                 }
//                 else {
//                     $('#emailresult').css("color", "green");
//                 }
//             },
//             error:function(err){

//             }
//         });
//     });
// });