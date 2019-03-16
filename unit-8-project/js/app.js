
const overlay = document.getElementById('overlay');
const userCardContainer = document.getElementById('userCardContainer');
var cardNumber;
var numberOfUsers= 0;
var userData;


// create variable for fetching 12 users from randomuser with american nationality

 const fetchUserData= fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response=> response.json());

// call fetch variable and create html for every user profile and append each li
// to the userCardContainer parent

    fetchUserData
        .then(function(data){
            userData= data.results;
            numberOfUsers= userData.length;

            for(var i = 0; i<numberOfUsers; i++){
            
                const card = document.createElement('li');
                card.id=i;
                card.className='cards';
                card.innerHTML = 
                    `
                    <img class="defaultPicture" src='${userData[i].picture.large}' alt="employee profile picture">
                    <div class="cardsInfo">
                        <p class="names">${userData[i].name.first +" "+ userData[i].name.last}</p>
                        <p class="emails">${userData[i].email}</p>
                        <p class="cities">${userData[i].location.city}</p>
                    </div>
                    `                     
                userCardContainer.appendChild(card);
            }
           
        })
    
        .then(function(){
            const cards =document.getElementsByClassName('cards');
            for(var i=0; i<cards.length;i++){
                var card = cards[i];
                card.addEventListener("click",function(){
                overlay.className= "overlayShow";
                    cardNumber=this.id;
                    generateModalHTML(userData, cardNumber);
            });
                }
    })
    
    // create variable for storing user's date of birth
const formatDate = function(dateArray, i){
    let dateOfBirth= new Date(dateArray[i].dob.date);
                let dd = dateOfBirth.getDate();
                let mm = dateOfBirth.getMonth() + 1;
                let year = dateOfBirth.getFullYear();
                let userDob = `${mm}/${dd}/${year}`;
                return userDob;
}
      
    
// generate modal html when a card is clicked. store the modal data inside the modalView div and append it to the parent (overlay)


let generateModalHTML = function(userData, i){
                 numberOfUsers= userData.length;

                    let index = i;
    const modalView = document.createElement('div');
                let userDob=formatDate(userData,i);
                modalView.id=i;
                modalView.className='modalView';
                modalView.innerHTML = 
                 `
                        <i class="close">&#10006;</i>
                    <img class="modalPicture" src='${userData[i].picture.large}' alt="employee profile picture">
                    <div class="modalData">
                        <p class="modalnames">${userData[i].name.first +" "+ userData[i].name.last}</p>
                        <p class="modalemails">${userData[i].email}</p>
                        <p class="modalcities">${userData[i].location.city}</p>
                    </div>
                    <div class="modalData2">
                        <p class="modalphone">${userData[i].cell}</p>
                        <p class="modaladdress">${userData[i].location.street} ${userData[i].location.city}, 
                        ${(userData[i].location.state)}  ${userData[i].location.postcode }</p>
                        <p class="birthdate"> Birthday : ${userDob}</p>
                    </div>
               
               ` 
                    overlay.appendChild(modalView);

                    

    // when the 'close' button is clicked, hide the overlay
        const close = $('.close');
         
            close.click(function(){
                overlay.className="overlayHide";
                modalView.style.display = "none";
            });

}

