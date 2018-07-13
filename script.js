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

(function (){

    const navButton = document.querySelector('#navButton');
    const topNav = document.querySelector('#topNav');
    const dropdown = document.querySelector('#dropdown');

    navButton.addEventListener('click', function(){
        topNav.classList.toggle('expanded');
        navButton.classList.toggle('clicked')
        dropdown.classList.toggle('show');
    });
})();



(function(){

    const slides = [
        'audrey.png',
        'blueleaf.jpg',
        'fortune.png',
        'shelter.png',
    ]

    let currentIndex = 0;

    let rotation;

    const prev = document.querySelector('.carousel .prev');
    const next = document.querySelector('.carousel .next');
    const view = document.querySelector('.carousel .view');
    const imgs = document.querySelector('.carousel .imgs');

    for (let i = 0; i< slides.length; i++){

        let imgUrl = slides[i];
        const img = document.createElement('img');
        img.setAttribute('src', './images' + imgUrl);
        imgs.appendChild(img);

        img.addEventListener('click', function() {
            currentIndex = i;
            showSlide();
            clearInterval(rotation);
        });
    }

    prev.addEventListener('click', function(){
        prevSlide();
        clearInterval(rotation);
    });

    next.addEventListener('click', function(){
        nextSlide();
        clearInterval(rotation);
    });

    function showSlide() {
        view.innerHTML = '';
        const imgUrl = slides[currentIndex];
        const img = document.createElement('img');
        img.setAttribute('src', './images/' + imgUrl);
        view.appendChild(img);
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        showSlide();
    }

    showSlide();

    rotation = setInterval(function(){
        nextSlide();
    }, 2000);

})();

const modal = document.getElementById('bioModal');

const btn = document.getElementById('#headShot');

btn.onclick = function (){
    modal.style.display = 'block';
}

span.onclick = function(){
    modal.style.display = 'none'    
}

window.onclick = function(event){
    if (event.target ==modal){
        modal.style.display = 'none';
    }
};