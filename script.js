const thumbs = document.querySelectorAll('#thumbnails > div');

for (let thumb of thumbs){
    thumb.onclick = function() {
        hideArticles();
        const articleId = thumb.getAttribute('article-id');
        const article = document.getElementById(articleId);
        article.classList.add('show');
    };
}

function hideArticles() {
    const articles = document.querySelectorAll('#projectScreen aside article');
    for (article of articles) {
        article.classList.remove('show');
    }
}

thumbs[0].classList.add('show');