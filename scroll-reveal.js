// Fungsi untuk memeriksa apakah elemen ada di viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Fungsi untuk menambah atau menghapus kelas 'active'
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// Event listener untuk scroll dan load
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
