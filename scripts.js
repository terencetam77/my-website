document.addEventListener('DOMContentLoaded', function() {
      // Modal questionnaire open/close
      const openModal = document.getElementById('openModal');
      const closeModal = document.getElementById('closeModal');
      const modal = document.getElementById('questionnaireModal');
      
      openModal.addEventListener('click', () => {
        modal.style.display = 'block';
        resetForm();
      });

      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        resetForm();
      });

      // Pages
      const page1 = document.getElementById('page1');
      const page2 = document.getElementById('page2');
      const page3 = document.getElementById('page3');
      const page4 = document.getElementById('page4');
      
      // Next and Back buttons
      document.getElementById('nextToPage2').addEventListener('click', () => {
        page1.style.display = 'none';
        page2.style.display = 'block';
      });

      document.getElementById('backToPage1').addEventListener('click', () => {
        page2.style.display = 'none';
        page1.style.display = 'block';
      });

      document.getElementById('nextToPage3').addEventListener('click', () => {
        page2.style.display = 'none';
        page3.style.display = 'block';
      });

      document.getElementById('backToPage2').addEventListener('click', () => {
        page3.style.display = 'none';
        page2.style.display = 'block';
      });

      document.getElementById('nextToPage4').addEventListener('click', () => {
        page3.style.display = 'none';
        page4.style.display = 'block';
      });

      document.getElementById('backToPage3').addEventListener('click', () => {
        page4.style.display = 'none';
        page3.style.display = 'block';
      });

      // Submit form
      document.getElementById('submitForm').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name && email) {
          alert(`Thank you, ${name}! Your details have been submitted.`);
          modal.style.display = 'none'; // Close modal after submission
          resetForm(); // Reset form for next time
        } else {
          alert('Please fill in all fields.');
        }
      });

      // Function to reset the form and restart the loop
      function resetForm() {
        page1.style.display = 'block';
        page2.style.display = 'none';
        page3.style.display = 'none';
        page4.style.display = 'none';

        document.getElementById('flavoursForm').reset();
        document.getElementById('brewMethodForm').reset();
        document.getElementById('frequencyForm').reset();
        document.getElementById('userInfoForm').reset();
      }
    });

// Carousel functions and navigations
document.addEventListener('DOMContentLoaded', function() {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const carousel = document.querySelector('.brand-cards');
    let currentIndex = 0;
    const totalItems = carousel.children.length;

    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    nextArrow.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});

// Side menu toggles
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

// Function to show the side menu
function sideMenuAppears() {
    document.getElementById('side-menu').classList.add('show-menu');
}

// Function to hide the side menu
function sideMenuDisappears() {
    document.getElementById('side-menu').classList.remove('show-menu');
}

// Close the side menu if clicked outside
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('side-menu');
    const menuTrigger = document.getElementById('menu-trigger');

    // Check if the click was outside the side menu and the menu trigger
    if (!sideMenu.contains(event.target) && !menuTrigger.contains(event.target)) {
        sideMenuDisappears();
    }
});
