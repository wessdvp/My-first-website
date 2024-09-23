document.addEventListener('DOMContentLoaded', function() {
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Check for the saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
    }

    document.getElementById('toggle-button').addEventListener('click', function() {
        const currentTheme = themeStylesheet.getAttribute('href');
        
        // Toggle between stylesheets
        if (currentTheme.includes('styles.css')) {
            themeStylesheet.href = 'night-mode.css';
            localStorage.setItem('theme', 'night-mode.css');
        } else {
            themeStylesheet.href = 'styles.css';
            localStorage.setItem('theme', 'styles.css');
        }
    });
});
