// Get the button element
const backToTopBtn = document.getElementById("backToTopBtn");
// Show the button when scrolling near the bottom of the page
window.onscroll = function () {
if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
    backToTopBtn.classList.remove("hidden");
} else {
    backToTopBtn.classList.add("hidden");
}
};
    // Scroll to top when clicking the button
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });

    const menuBtn = document.getElementById("menu-btn");
      const dropdownLinks = document.getElementById("dropdown-links");

      menuBtn.addEventListener("click", () => {
        dropdownLinks.classList.toggle("hidden");
      });