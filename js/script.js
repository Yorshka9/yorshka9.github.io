

    // function for setting the opacity of elements with the class "hideme" when they are scrolled into view

  $(document).ready(function() {
      
      // every time the window is scrolled ...
      $(window).scroll( function(){
      
          // check the location of each desired element 
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              // if the object is completely visible in the window, fade it it
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });

  // add click event so that a popup appears when the send message-button is pressed

  $(document).ready(function () {
        $('#btnSend').click(function () {
            $('#messageSent').show('fade');

            // if the user doesnt close the popup within 2 seconds, automatically close it

            setTimeout(function () {
                $('#messageSent').hide('fade');
            }, 2000);
        });

        $('#linkClose').click(function (){
            $('#messageSent').hide('fade');
        });
  });

    // checks if name, email, and message has been filled in by user. if they have, disabled button = false, else disabled = true

  $(document).ready(function (){
    validate();
    $('#name, #email, #message').change(validate);
});

function validate(){
    if ($('#name').val().length   >   0   &&
        $('#email').val().length  >   0   &&
        $('#message').val().length    >   0) {
        $("button[type=submit]").prop("disabled", false);
    }
    else {
        $("button[type=submit]").prop("disabled", true);
    }
}


// adds the "unhide" class to "hidden" elements to simulate a delayed opacity transition

$('.hidden').addClass('unhide');