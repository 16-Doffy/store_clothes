const toP = document.querySelector(".top");
window.addEventListener("scroll", function() {
    const Y = this.scrollY;  // Use scrollY for vertical scrolling
    if (Y > 1) {
        toP.classList.add("active");
    } else {
        toP.classList.remove("active");  // Remove the class when scrolling back to the top
    }
});

const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function(menu) {  // Corrected parameter naming
    menu.addEventListener("click", function() {
        menu.classList.toggle("block");  // Toggle class on click
    });
});