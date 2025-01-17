const searchIcon = document.getElementById('searchIcon');
const searchContainer = document.getElementById('searchContainer');
const overlay = document.getElementById('overlay');

// Show the search container
searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('show');
    overlay.classList.toggle('show');
  });
  
  // Close the search container using overlay
  overlay.addEventListener('click', () => {
    searchContainer.classList.remove('show');
    overlay.classList.remove('show');
  });