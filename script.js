document.addEventListener("DOMContentLoaded", function() {
    // Get the create card button
    var createCardButton = document.getElementById("create-card-button");
  
    // Add click event listener
    createCardButton.addEventListener("click", function() {
      // Get form inputs
      var name = document.getElementById('name').value;
      var description = document.getElementById('description').value;
      var imageFile = document.getElementById('image').files[0];
  
      // Create new card element
      var card = document.createElement('div');
      card.classList.add('card');
  
      // Create image element
      var image = document.createElement('img');
      image.classList.add('profile-pic');
      image.alt = 'Profile Picture';
      var reader = new FileReader();
      reader.onload = function(event) {
        image.src = event.target.result;
      }
      reader.readAsDataURL(imageFile);
  
      // Create info element
      var info = document.createElement('div');
      info.classList.add('info');
      var nameElement = document.createElement('div');
      nameElement.classList.add('name');
      nameElement.textContent = name;
      var descriptionElement = document.createElement('div');
      descriptionElement.classList.add('description');
      descriptionElement.textContent = description;
  
      // Append elements
      info.appendChild(nameElement);
      info.appendChild(descriptionElement);
      card.appendChild(image);
      card.appendChild(info);
  
      // Add card to container
      var cardsContainer = document.getElementById('cards-container');
      cardsContainer.appendChild(card);

       // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('image').value = '';

      // Adjust form container position
      var formContainer = document.querySelector('.form-container');
      formContainer.style.top = cardsContainer.clientHeight + 220 + 'px'; // Adjust as needed
      formContainer.style.left = cardsContainer.clientHeight +  + 'px'; // Adjust as needed

    });
  });
  
  
//   console.log(0 == false);


// remove button bhi add kia 
// document.addEventListener("DOMContentLoaded", function() {
//     // Function to create a card
//     function createCard(name, description, imageSrc) {
//       // Create new card element
//       var card = document.createElement('div');
//       card.classList.add('card');
  
//       // Create image element
//       var image = document.createElement('img');
//       image.classList.add('profile-pic');
//       image.alt = 'Profile Picture';
//       image.src = imageSrc;
  
//       // Create info element
//       var info = document.createElement('div');
//       info.classList.add('info');
//       var nameElement = document.createElement('div');
//       nameElement.classList.add('name');
//       nameElement.textContent = name;
//       var descriptionElement = document.createElement('div');
//       descriptionElement.classList.add('description');
//       descriptionElement.textContent = description;
  
//       // Create remove button
//       var removeButton = document.createElement('button');
//       removeButton.textContent = 'Remove Card';
//       removeButton.addEventListener('click', function() {
//         card.remove(); // Remove the card when the button is clicked
//         // Adjust form container position after removing the card
//         var formContainer = document.querySelector('.form-container');
//         var cardsContainer = document.getElementById('cards-container');
//         formContainer.style.top = cardsContainer.clientHeight + 40 + 'px'; // Adjust as needed
//       });
  
//       // Append elements
//       info.appendChild(nameElement);
//       info.appendChild(descriptionElement);
//       info.appendChild(removeButton); // Append the remove button
//       card.appendChild(image);
//       card.appendChild(info);
  
//       // Add card to container
//       var cardsContainer = document.getElementById('cards-container');
//       cardsContainer.appendChild(card);
//     }
  
//     // Get the create card button
//     var createCardButton = document.getElementById("create-card-button");
  
//     // Add click event listener
//     createCardButton.addEventListener("click", function() {
//       // Get form inputs
//       var name = document.getElementById('name').value;
//       var description = document.getElementById('description').value;
//       var imageFile = document.getElementById('image').files[0];
  
//       // Create a FileReader to read the image file
//       var reader = new FileReader();
//       reader.onload = function(event) {
//         // Call createCard function with the input values and the image data URL
//         createCard(name, description, event.target.result);
//       };
//       reader.readAsDataURL(imageFile); // Read the image file as data URL
  
//       // Clear input fields
//       document.getElementById('name').value = '';
//       document.getElementById('description').value = '';
//       document.getElementById('image').value = '';
  
//       // Adjust form container position
//       var formContainer = document.querySelector('.form-container');
//       var cardsContainer = document.getElementById('cards-container');
//       formContainer.style.top = cardsContainer.clientHeight + 40 + 'px'; // Adjust as needed
//     });
//   });