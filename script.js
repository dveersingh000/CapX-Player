document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const popup = document.querySelector('.video-popup');
    const videoWrapper = document.querySelector('.video-wrapper');
    const closePopup = document.querySelector('.close-popup');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video');
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            
            videoWrapper.innerHTML = `
                <span class="close-popup">&times;</span>
                <iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            popup.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        videoWrapper.innerHTML = ''; // Clear iframe
    });

    // Close popup when clicking outside the video
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            videoWrapper.innerHTML = ''; // Clear iframe
        }
    });
});
