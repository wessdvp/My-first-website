document.getElementById('toggle-button').addEventListener('click', function() {
    const currentTheme = document.getElementById('theme-stylesheet');
    const newTheme = document.createElement('link');

    newTheme.rel = 'stylesheet';
    newTheme.id = 'theme-stylesheet';
    
    // Toggle between stylesheets
    if (currentTheme.getAttribute('href') === 'styles.css') {
        newTheme.href = 'night-mode.css';
    } else {
        newTheme.href = 'styles.css';
    }

    // Replace the current stylesheet with the new one
    document.head.removeChild(currentTheme);
    document.head.appendChild(newTheme);
});
