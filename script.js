const thumbs = document.querySelectorAll('#thumbnail > div');

for (let thumb of thumbs){
    thumb.onclick = function() {
        hideArticles();
        const articleId = thumb.getAttribute('article-id');
        const article = document.getElementById(articleId);
        article.classList.add('show');
    };
}

function hideArticles() {
    const articles = document.querySelectorAll
}