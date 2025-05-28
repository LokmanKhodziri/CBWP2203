document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        // Make the entire card clickable
        card.style.cursor = 'pointer'; 
        card.addEventListener('click', function() {
            const watchBtn = card.querySelector('.watch-btn');
            if (watchBtn && watchBtn.href) {
                window.open(watchBtn.href, '_blank'); 
            }
        });

        // Extract YouTube video ID and update thumbnail
        const watchBtn = card.querySelector('.watch-btn');
        const thumbnailImg = card.querySelector('.video-thumbnail img');

        if (watchBtn && watchBtn.href && thumbnailImg) {
            try {
                const url = new URL(watchBtn.href);
                const videoId = url.searchParams.get('v');

                if (videoId) {
                    // Construct the YouTube thumbnail URL (using hqdefault for good quality and availability)
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    thumbnailImg.src = thumbnailUrl;
                }
            } catch (e) {
                console.error('Invalid URL for video thumbnail:', watchBtn.href, e);
            }
        }
    });
}); 