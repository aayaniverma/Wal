// Function to toggle the visibility of the drawer
function toggleDrawer() {
    var drawer = document.getElementById('drawer');
    var drawerToggleBtn = document.getElementById('drawer-toggle-btn');
    
    drawer.classList.toggle('open');
    
    // Adjust the button position based on the drawer state
    if (drawer.classList.contains('open')) {
        drawerToggleBtn.style.left = '300px'; // Adjust this value to align with your drawer width
    } else {
        drawerToggleBtn.style.left = '20px'; // Default position
    }
}

// Function to toggle the search bar's expanded state
function toggleSearch() {
    var searchBar = document.getElementById('search-bar');
    var searchBtn = document.getElementById('search-btn');
    
    if (searchBar.style.width === '100%') {
        searchBar.style.width = '300px';
        searchBtn.style.marginLeft = '10px';
    } else {
        searchBar.style.width = '100%';
        searchBtn.style.marginLeft = '0px';
    }
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
    });
}

// Function to toggle the visibility of subcategories
function toggleSubCategories() {
    var subCategories = document.getElementById('sub-categories');
    subCategories.classList.toggle('open');
}

// Optional: Close the drawer when clicking outside of it
document.addEventListener('click', function(event) {
    var drawer = document.getElementById('drawer');
    var drawerToggleBtn = document.getElementById('drawer-toggle-btn');
    
    if (drawer.classList.contains('open') && !drawer.contains(event.target) && !drawerToggleBtn.contains(event.target)) {
        drawer.classList.remove('open');
        drawerToggleBtn.style.left = '20px'; // Reset button position
    }
});
