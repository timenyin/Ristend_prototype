document.addEventListener('DOMContentLoaded', function() {
    const serviceContents = document.querySelectorAll('.service-content');
    const maxWords = 15; // Matches your requested word count

    serviceContents.forEach(content => {
        const words = content.textContent.trim().split(/\s+/);
        
        if (words.length > maxWords) {
            // Trim to maxWords and add ellipsis
            content.textContent = words.slice(0, maxWords).join(' ') + '...';
            
            // Optional: Add ARIA label for accessibility
            content.setAttribute('aria-label', content.textContent);
        }
    });
});