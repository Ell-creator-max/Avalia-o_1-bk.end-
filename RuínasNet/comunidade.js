document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    
    if (!loggedInUser) {
        window.location.href = 'login.html';
        return; 
    }

    document.getElementById('user-name').textContent = loggedInUser;

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('loggedInUser');
        alert('Você saiu da sua conta.');
        window.location.href = 'login.html';
    });

    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');
    const searchInput = document.getElementById('search-input'); 

    const displayPosts = (searchTerm = '') => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    postsContainer.innerHTML = ''; 

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = '<p>Nenhuma publicação encontrada.</p>';
        return;
    }

    filteredPosts.slice().reverse().forEach(post => {

        const linkElement = document.createElement('a');
        linkElement.href = `post.html?id=${post.id}`; 
        linkElement.className = 'post-link'; 

        const postElement = document.createElement('article');
        postElement.className = 'post';

        const previewContent = post.content.length > 150 
            ? post.content.substring(0, 150) + '...' 
            : post.content;

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <div class="post-meta">
                <span>Por: <strong>${post.author}</strong></span> | 
                <span>Em: ${post.timestamp}</span>
            </div>
            <p>${previewContent.replace(/\n/g, '<br>')}</p> 
        `;
        
        linkElement.appendChild(postElement); 
        postsContainer.appendChild(linkElement); 
    });
}; 
});