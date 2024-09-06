// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});

// Filter Tools
function filterTools() {
    const searchBar = document.getElementById('search-bar').value.toLowerCase();
    const toolCards = document.getElementsByClassName('tool-card');

    for (let i = 0; i < toolCards.length; i++) {
        let toolTitle = toolCards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (toolTitle.includes(searchBar)) {
            toolCards[i].style.display = "block";
        } else {
            toolCards[i].style.display = "none";
        }
    }
}
