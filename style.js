const scrollContainer = document.querySelector('.card-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -2000, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 2000, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});
