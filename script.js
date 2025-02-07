const searchButton = document.getElementById('searchButton');
const searchInputBox = document.getElementById('searchInputBox');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
    if (searchInputBox.classList.contains('visible')) {
        searchInput.value = '';
    } else {
        searchInputBox.classList.add('visible');
        searchInput.focus();
    }
});

document.addEventListener('click', (event) => {
    if (!searchButton.contains(event.target) && !searchInputBox.contains(event.target)) {
        searchInputBox.classList.remove('visible');
    }
});

// ----------------------------------------------------------------------------------------------

const searchButton2 = document.getElementById('searchButton2');
const searchInputBox2 = document.getElementById('searchInputBox2');
const searchInput2 = document.getElementById('searchInput2');

searchButton2.addEventListener('click', () => {
    if (searchInputBox2.classList.contains('visible')) {
        searchInput2.value = ''; 
    } else {
        searchInputBox2.classList.add('visible');
        searchInput2.focus(); 
    }
});

document.addEventListener('click', (event) => {
    if (!searchButton2.contains(event.target) && !searchInputBox2.contains(event.target)) {
        searchInputBox2.classList.remove('visible');
    }
});
// ----------------------------------------------------------------------


window.addEventListener("scroll", function () {
    const header = document.getElementById("site-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
});
// ----------------------------------------------------------------------

document.querySelectorAll("video").forEach(video => {
    video.addEventListener("click", function () {
      if (!video.hasAttribute("controls")) {
        video.setAttribute("controls", "true");
      }
    });
  });
