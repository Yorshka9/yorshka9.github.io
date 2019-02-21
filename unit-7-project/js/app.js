

$(document).ready(function(){
    $(".x").click(function(e){
        var alert = $(this).closest("p");
            alert.fadeOut( "slow", function() {
            alert.remove();
  });
    });
    
    
  $("#bell").click(function(){
    $("#header_alerts").fadeToggle( "slow", "linear");
    $("#bell_green_dot").fadeToggle();
  });
    
  $("#x").click(function(e){
     var alert = $(this).closest("p");
            alert.fadeOut( "slow", function() {
            alert.remove();
  });
    });
});


// today's date
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




var searchUser=$("#searchUser");
var members = $(".newMembersCard");

searchUser.keyup(function(){
         var value = $(this).val().toLowerCase();
         $(".newMembersCard p").filter(function(){
              $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
         });
    
});
/*=====================================================================
                    From Submit
=======================================================================*/


    $("#send").click(function(e){
        
        e.preventDefault();
   if($("#searchUser").val()=='' || $("#textmessage").val()==''){
       alert('I am sorry. Both fields should be filed');
   } else{
       $("#message").submit();
       alert("Thank you. Your message has been sent!");
   }
   
    });




/*======================================================================
        save settings to local storage
=======================================================================*/

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



