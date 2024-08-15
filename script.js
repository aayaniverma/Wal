function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    const content = document.getElementById("content");
    const drawerToggleBtn = document.getElementById("drawer-toggle-btn");

    // Check if the drawer has the class 'open'
    const isOpen = drawer.classList.contains('open');

    if (isOpen) {
        // Close the drawer
        drawer.classList.remove('open');
        content.style.marginLeft = "0px"; // Adjust content margin for the closed drawer
        drawerToggleBtn.style.left = "20px"; // Position button near the left edge
    } else {
        // Open the drawer
        drawer.classList.add('open');
        content.style.marginLeft = "250px"; // Adjust content margin for the open drawer
        drawerToggleBtn.style.left = "250px"; // Position button near the edge of the open drawer
    }
}


function toggleSubCategories() {
    const subCategories = document.getElementById("sub-categories");
    if (subCategories.style.display === "block") {
        subCategories.style.display = "none";
    } else {
        subCategories.style.display = "block";
    }
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        toggleDrawer();
    }
}