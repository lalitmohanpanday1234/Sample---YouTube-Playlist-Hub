// Playlist data with multiple categories
const playlistData = [
    {
        title: "Best Videos For Everyone | Parenting Tips & Life Lessons",
        description: "This playlist contains the best parenting guides and life lessons for parents and children. Must-watch videos that cover essential parenting techniques, child development, and family relationships.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YKvO0SQVGzO5E-OCqVxwgH",
        channel: "@YouTubePlaylistHindi",
        categories: ["VVIMP", "Family", "Video"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Health, Fitness, Food & Nutrition Guide",
        description: "Comprehensive guide to health, fitness, and nutrition. Learn about best diet practices, fitness routines, and healthy lifestyle tips from experts. Essential for everyone looking to improve their wellbeing.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bMEMebsuU2FSSa7TnXm-tv",
        channel: "@YouTubePlaylistHindi",
        categories: ["VVIMP", "Video"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Reality of Media, Government, Elites & Society",
        description: "Eye-opening videos that reveal the truth about media, government systems, elite powers, and societal structures. Awareness and life lessons that everyone should know to understand the world better.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZdGXiXHKmxnEDxeohkEqvS",
        channel: "@YouTubePlaylistHindi",
        categories: ["VVIMP", "Expose", "Politics", "Video"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Wisdom, Philosophy & Purpose | Life, Time & Job/Work",
        description: "Deep philosophical content exploring life's purpose, time management, and the meaning of work. Life lessons, inner growth, and truth-seeking discussions for personal development.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bnDV6C6pSha40W1VSqy_bu",
        channel: "@YouTubePlaylistHindi",
        categories: ["VVIMP", "Philosophy", "Video"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Motivation, Inspiration, Transformation & Life Hacks",
        description: "Powerful motivational content to inspire personal transformation. Learn about habits, mindset development, discipline, productivity techniques, and focus improvement strategies.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aCvH38Bz5UQZGzkCV1AIEs",
        channel: "@YouTubePlaylistHindi",
        categories: ["VVIMP", "Philosophy", "Video"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Best Videos in the World | Society, Humanity & Real Life Lessons",
        description: "Curated collection of the most impactful videos everyone should watch. Covering society issues, humanity, and real-life lessons that transform perspectives and understanding.",
        url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdG3Hq1Q3geCGjkX-bDDjXn9",
        channel: "@WeAreMature",
        categories: ["Video", "World"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Real Hinduism: An Introduction to Sanatan Dharma",
        description: "Comprehensive introduction to Sanatan Dharma (Hinduism) covering philosophy, knowledge systems, ancient wisdom, and spiritual practices. Authentic representation of Hindu traditions.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZD-kdGzFPnFyBKze3s3nYZ",
        channel: "@YouTubePlaylistHindi",
        categories: ["Hinduism", "Religion", "Sanatan Dharma", "Philosophy"],
        impact: "Positive",
        usefulness: "High"
    },
    {
        title: "Protest Music India | Expose Govt, Society By Music",
        description: "Powerful protest music that addresses social and political issues in India. Songs that expose government systems and societal problems while advocating for change and awareness.",
        url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NvWMBJLqxewyGzM7pH2jVI",
        channel: "@DarkSideOf-India",
        categories: ["Music", "Politics", "Expose"],
        impact: "Negative",
        usefulness: "Very High"
    },
    {
        title: "Protest Stand-Up Comedy | Comedians Talk On Government and Society",
        description: "Stand-up comedy performances that critique government policies and societal norms. Comedians use humor to highlight important issues and provoke thoughtful discussion.",
        url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PsOL0h3Z_6YdLsG4SEQ6wn",
        channel: "@DarkSideOf-India",
        categories: ["Video", "Politics", "Expose"],
        impact: "Negative",
        usefulness: "Very High"
    },
    {
        title: "Movies (Expose And Reality of Society)",
        description: "Collection of films that expose social realities and address important societal issues. These movies provide critical perspectives on various aspects of contemporary life and culture.",
        url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OlB0vNkxN9r7EyKkG-4Pgw",
        channel: "@DarkSideOf-India",
        categories: ["Film", "Expose", "World"],
        impact: "Negative",
        usefulness: "Very High"
    },
    {
        title: "Ancient Indian Wisdom - Upnishads Collection",
        description: "Complete collection of Upnishads explaining the deep spiritual and philosophical teachings of ancient India. Essential for understanding the roots of Indian philosophy.",
        url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Yz4tK-aPcZm-jpuzJsuh2B",
        channel: "@YouTubePlaylistHindi",
        categories: ["Upnishad", "Philosophy", "Religion", "VVIMP"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "Great Indian Thinkers & Gurus Biography",
        description: "Biographical series on great Indian thinkers, spiritual leaders, and gurus who shaped Indian philosophy and spirituality through their teachings and lives.",
        url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghmjies7K7wj-97s6WY01syw",
        channel: "@HumanityWood",
        categories: ["Biography", "Guru", "Philosophy"],
        impact: "Positive",
        usefulness: "High"
    },
    {
        title: "Book Summaries - Life Changing Books",
        description: "Summaries and key takeaways from life-changing books across various genres including self-help, philosophy, psychology, and personal development.",
        url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHsdw-sE3tfzMtjWOnXD7j8",
        channel: "@WeAreMature",
        categories: ["Book", "Philosophy", "Video"],
        impact: "Positive",
        usefulness: "High"
    }
];

// DOM Elements
const playlistsContainer = document.getElementById('playlists-container');
const totalCountElement = document.getElementById('total-count');
const showingCountElement = document.getElementById('showing-count');
const categoryFilters = document.querySelectorAll('.filter-btn');
const impactFilters = document.querySelectorAll('.impact-filters input');
const usefulnessFilters = document.querySelectorAll('.usefulness-filters input');

// Initialize the application
function init() {
    // Set total count
    totalCountElement.textContent = playlistData.length;
    
    // Render all playlists initially
    renderPlaylists(playlistData);
    
    // Set up event listeners
    setupEventListeners();
}

// Render playlists to the DOM
function renderPlaylists(playlists) {
    playlistsContainer.innerHTML = '';
    
    if (playlists.length === 0) {
        playlistsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No playlists match your filters. Try adjusting your criteria.</p>
            </div>
        `;
        showingCountElement.textContent = '0';
        return;
    }
    
    playlists.forEach(playlist => {
        const playlistCard = createPlaylistCard(playlist);
        playlistsContainer.appendChild(playlistCard);
    });
    
    showingCountElement.textContent = playlists.length;
}

// Create a playlist card element
function createPlaylistCard(playlist) {
    const card = document.createElement('div');
    card.className = 'playlist-card';
    
    // Extract playlist ID from URL for embedding
    const playlistId = extractPlaylistId(playlist.url);
    
    card.innerHTML = `
        <div class="playlist-header">
            <div>
                <div class="playlist-title">${playlist.title}</div>
                <div class="tags-container">
                    ${playlist.categories.map(category => `<span class="tag ${category.replace(/\s+/g, '-')}">${category}</span>`).join('')}
                </div>
            </div>
            <div class="expand-icon">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div class="playlist-details">
            <a href="${playlist.url}" target="_blank" class="watch-btn">
                <i class="fab fa-youtube"></i> Watch Playlist on YouTube
            </a>
            ${playlistId ? `
                <div class="youtube-embed-container">
                    <div class="youtube-embed">
                        <iframe 
                            src="https://www.youtube.com/embed/videoseries?list=${playlistId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            ` : ''}
            <div class="playlist-description-section">
                <div class="description-toggle">
                    Playlist Description <i class="fas fa-chevron-down"></i>
                </div>
                <div class="description-text">
                    ${playlist.description}
                </div>
            </div>
            <div class="details-grid">
                <div class="detail-item">
                    <span class="detail-label">Channel</span>
                    <span class="detail-value">${playlist.channel || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Impact</span>
                    <span class="detail-value">${playlist.impact || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Usefulness</span>
                    <span class="detail-value">${playlist.usefulness || 'N/A'}</span>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for this card
    const header = card.querySelector('.playlist-header');
    const descriptionToggle = card.querySelector('.description-toggle');
    const descriptionText = card.querySelector('.description-text');
    
    header.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
    
    descriptionToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        descriptionText.classList.toggle('expanded');
        descriptionToggle.classList.toggle('expanded');
        descriptionToggle.innerHTML = descriptionText.classList.contains('expanded') 
            ? 'Playlist Description <i class="fas fa-chevron-up"></i>' 
            : 'Playlist Description <i class="fas fa-chevron-down"></i>';
    });
    
    return card;
}

// Extract playlist ID from YouTube URL
function extractPlaylistId(url) {
    const match = url.match(/[&?]list=([^&]+)/i);
    return match ? match[1] : null;
}

// Filter playlists based on selected criteria
function filterPlaylists() {
    // Get active category
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    
    // Get selected impact values
    const selectedImpacts = Array.from(impactFilters)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Get selected usefulness values
    const selectedUsefulness = Array.from(usefulnessFilters)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Filter playlists
    const filteredPlaylists = playlistData.filter(playlist => {
        // Category filter
        const categoryMatch = activeCategory === 'all' || 
            playlist.categories.includes(activeCategory);
        
        // Impact filter
        const impactMatch = selectedImpacts.length === 0 || 
            (playlist.impact && selectedImpacts.includes(playlist.impact));
        
        // Usefulness filter
        const usefulnessMatch = selectedUsefulness.length === 0 || 
            (playlist.usefulness && selectedUsefulness.includes(playlist.usefulness));
        
        return categoryMatch && impactMatch && usefulnessMatch;
    });
    
    // Render filtered playlists
    renderPlaylists(filteredPlaylists);
}

// Set up event listeners
function setupEventListeners() {
    // Category filter buttons
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPlaylists();
        });
    });
    
    // Impact filter checkboxes
    impactFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterPlaylists);
    });
    
    // Usefulness filter checkboxes
    usefulnessFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterPlaylists);
    });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
