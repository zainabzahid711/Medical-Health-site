// *******************************************   FAQ collapse 
document.addEventListener("DOMContentLoaded", function () {
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  collapsibleHeaders.forEach(function (collapsibleHeader) {
    collapsibleHeader.addEventListener("click", function () {
      const collapsibleContent = this.nextElementSibling;
      collapsibleContent.style.display = collapsibleContent.style.display === 'none' ? 'block' : 'none';
      const toggleIcon = this.querySelector('.toggle-icon');
      toggleIcon.textContent = collapsibleContent.style.display === 'none' ? '+' : '-';
      if (toggleIcon.textContent === '+') {
        this.style.color = 'black'; // set the heading color back to black
        toggleIcon.style.color = 'black'; // set the toggle icon color to black
      } else {
        this.style.color = 'blue'; // set the heading color to blue
        toggleIcon.style.color = 'black'; // set the toggle icon color back to black
      }
    });
  });
});
//  ******************************************* responsive menu icon
document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector('.menu-icon');
  var headLinksDiv = document.querySelector('.head-links-div');
  var headBtn = document.querySelector('.head-btn');

  menuIcon.addEventListener('click', function () {
    headLinksDiv.classList.toggle('show-menu');
    headBtn.classList.toggle('hide-btn');
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 500) {
      headLinksDiv.classList.remove('show-menu');
      headBtn.classList.remove('hide-btn');
    }
  });
});