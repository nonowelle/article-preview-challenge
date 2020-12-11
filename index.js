const share = document.querySelector('.share');
const button = document.querySelector('#icon');

button.addEventListener('click', () => {
    share.classList.toggle("active");
    if (share.classList.contains("active")) {
        button.src = 'images/icon-share-active.svg';
        button.style.backgroundColor = "hsl(214, 17%, 51%)"
    } else {
        button.src = 'images/icon-share.svg';
        button.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
});