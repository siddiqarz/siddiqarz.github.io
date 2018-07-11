function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myEmail");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("My email is copied to your Clipboard! " + copyText.value);
}
(function() {
  
  const toggleNav = document.querySelector('#toggleNav');
  const midNav = document.querySelector('#midNav');

  toggleNav.addEventListener('click', function() {
    midNav.classList.toggle('expanded');
  });

})();
(function() {
  
  // Array of image URLs to display
  const slides = [
    { imgUrl: 'pets.png', gitHubUrl: 'VirtualPet' },
    { imgUrl: 'travel.png', gitHubUrl: 'Travel' },
    { imgUrl: 'pet-shelter.png', gitHubUrl: 'VirtualPetShelter' },
  ];

  // Index of currently displayed URL
  let currentIndex = 0;

  // Empty until later: a reference to our interval to rotate
  // through images... storing it in a variable allows us to
  // cancel it whenever we want
  let rotation;

  // The DOM elements that comprise our carousel
  const prev = document.querySelector('.carousel .prev');
  const next = document.querySelector('.carousel .next');
  const view = document.querySelector('.carousel .view');
  const imgs = document.querySelector('.carousel .imgs');

  view.addEventListener('click', function() {
    const { gitHubUrl } = slides[currentIndex];
    window.open('https://github.com/siddiqarz/'+gitHubUrl, '_blank');
  });

  // Iterate through the image URLs, creating the preview
  // icons at the bottom of the carousel
  for (let i = 0; i < slides.length; i++) {

    // Create the <img> element
    let imgUrl = slides[i].imgUrl;
    const img = document.createElement('img');
    img.setAttribute('src', './images/' + imgUrl);
    imgs.appendChild(img);

    // When preview is clicked, display that image
    img.addEventListener('click', function() {
      currentIndex = i;
      showSlide();
      clearInterval(rotation);
    });
  }

  // Clicking "previous" button displays previous image
  prev.addEventListener('click', function() {
    prevSlide();
    clearInterval(rotation);
  });

  // Clicking "next" button displays next image
  next.addEventListener('click', function() {
    nextSlide();
    clearInterval(rotation);
  });

  // Display slide in view based on value of currentIndex
  function showSlide() {
    view.innerHTML = '';
    const imgUrl = slides[currentIndex].imgUrl;
    const img = document.createElement('img');
    img.setAttribute('src', './images/' + imgUrl);
    view.appendChild(img);
  }

  // Change currentIndex, looping if needed, then show slide
  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide();
  }

  // Change currentIndex, looping if needed, then show slide
  function nextSlide() {
    currentIndex++;
    if (currentIndex === slides.length) {
      currentIndex = 0;
    }
    showSlide();
  }
  
  // Display the first slide in the carousel
  showSlide();

  // Begin by setting an interval to loop through the images
  // Store it in a variable to be cleared on user interaction
  rotation = setInterval(function() {
    nextSlide();
  }, 2000);

})();
$('.flip').hover(function(){
  $(this).find('.card').toggleClass('flipped');

});

function showModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('show');

  modal.onclick = closeModal;

  const modalContent = document.querySelector('#modal > div');
  modalContent.onclick = function(event) {
    console.log(event);
    event.stopPropagation();
  };
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
}