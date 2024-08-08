document.addEventListener("DOMContentLoaded", function () {
    var fadeinElements = document.querySelectorAll('.fadein');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.tagName === 'H2') {
                    entry.target.classList.add('slidein');
                }
            }
        });
    });

    fadeinElements.forEach(function (element) {
        observer.observe(element);
    });
});