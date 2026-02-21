const heroImg = document.querySelector('.hero-image img');

let angle = 0;
function animate() {
    angle += 0.1;
    heroImg.style.transform = `translateY(${Math.sin(angle) * 5}px)`;
    requestAnimationFrame(animate);
}
animate();
