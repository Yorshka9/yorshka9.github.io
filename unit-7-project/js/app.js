


// sets the date to today's date

var date = document.getElementsByClassName("dates");


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = mm+'/'+dd+'/'+yyyy;
Array.from(date).forEach(function(e){
    e.textContent=today;
})





  // when clicking on the text on the bell icon alerts, remove the alert
  // (previously was for the 'X' but on mobile it was difficult to press it 
  //  so I changed it to cover the whole text instead in order to make it
  //  easier for mobile users)

$(document).ready(function(){
    $(".message").click(function(e){
        var alert = $(this).closest("p");
            alert.fadeOut( "slow", function() {
            alert.remove();
  });
    });
    
    
  $("#bell").click(function(){
    $("#bell_alerts").fadeToggle( "slow", "linear");
    $("#bell_green_dot").fadeToggle();
  });
    
    // when clicking 'X' on the chart header alert, remove the element 
  $("#x").click(function(e){
     var alert = $(this).closest("p");
            alert.fadeOut( "slow", function() {
            alert.remove();
  });
    });
});


// filter out members if user types in a matching letter or name

var searchUser=$("#searchMember");
var members = $(".new_members_card");

searchUser.keyup(function(){
         var value = $(this).val().toLowerCase();
         $(".new_members_card p").filter(function(){
              $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
         });
    
});

    // alert the user with 'message sent' when message is submitted and both fields
    // are filled


    $("#send").click(function(e){
        
        e.preventDefault();
   if($("#searchUser").val()=='' || $("#textmessage").val()==''){
       alert('Please fill in both fields.');
   } else{
       $("#message").submit();
       alert("Message sent!");
   }
   
    });




    // store settings in local storage

$(function() {
    var checkBox = localStorage.getItem("settingbtn");
    if (checkBox !== null) {
        $(".toggle").each(function(){
            $(this).attr("checked", "checked");
        });
    }
});

$(".toggle").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("settingbtn", $(this).val());
    } else {
        localStorage.removeItem("favorite");
    }
});



  $(".selectTimeZone").change(function(){
        var key = $(this).attr("id");
        var value = $(this).val();
        localStorage.setItem(key,value);
  });
  var inputValue= JSON.parse(localStorage.getItem('inputValue')) || {};
  

  $(".timeZones").each(function(){
      var key = $(this).attr('id');
      if(localStorage.getItem(key)){
          $(this).val(localStorage.getItem(key));
      }
  });


    // when 'label' is clicked (hourly, daily, weekly, monthly), change background color
    // of the selected li element

    var $li = $('#labels li').click(function() {
        $li.removeClass('selected');
        $(this).addClass('selected');
    });
    
    