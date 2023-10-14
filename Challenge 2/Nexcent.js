
setTimeout(() => {
      var first_section = document.getElementById('hero_section');
      first_section.style.opacity = '1';
      first_section.style.transform = 'translateY(0)';
}, 100);



// Function to check if an element is in the viewport with an offset
function isElementInViewport(el, offset) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom + offset >= 0
        );
      }
      
      // Function to handle scroll with an offset
function handleScroll() {
        var sections = document.querySelectorAll('section:not(:first-child)');
        sections.forEach(function(section) {
                if (isElementInViewport(section, 20)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
        }
});
}
      
      
      // Attach an event listener to the 'scroll' event
window.addEventListener('scroll', handleScroll);
