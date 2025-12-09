/* ---------------- PAGE LOADER ---------------- */
const loader = document.querySelector('.page-loader');
loader.addEventListener('animationend', () => loader.style.display='none');

/* ---------------- BUTTON & NAV INTERACTIONS ---------------- */
const button = document.querySelector('.glass-button');
button.addEventListener('mouseenter',()=>document.body.classList.add('hovered'));
button.addEventListener('mouseleave',()=>document.body.classList.remove('hovered'));

const featuresBtn = document.getElementById('featuresBtn');
const cards = document.querySelectorAll('.feature-card');
featuresBtn.addEventListener('click', ()=>{
    document.getElementById('features').scrollIntoView({behavior:'smooth'});
    cards.forEach(card=>{card.classList.add('animate-once'); setTimeout(()=>card.classList.remove('animate-once'),1200);});
});

document.getElementById('contactBtn').addEventListener('mouseenter',()=>{
    const text=document.getElementById('contactText');
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    text.classList.add('bounce');
    setTimeout(()=>text.classList.remove('bounce'),600);
});

/* ---------------- LIQUID GLASS CURSOR ---------------- */
const cursor=document.querySelector('.cursor');
let mouseX=0, mouseY=0, posX=0, posY=0;
document.addEventListener('mousemove',e=>{mouseX=e.clientX; mouseY=e.clientY;});
function animate(){posX+=(mouseX-posX)*0.15; posY+=(mouseY-posY)*0.15; cursor.style.transform=`translate(${posX}px,${posY}px) translate(-50%,-50%)`; requestAnimationFrame(animate);}
animate();
const interactive=document.querySelectorAll('a, button, .glass-button');
interactive.forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active')); el.addEventListener('mouseleave',()=>cursor.classList.remove('active'));});

/* ---------------- SHOP MODAL ---------------- */
const shopModal = document.getElementById('shopModal');
const shopBtn = document.getElementById('shopBtn');
const banner = document.getElementById('marketingBanner');
const bannerMessages = ["Almost Sold Out!", "Buy it Quickly!", "Best Rated!", "Top of the Best!"];

function showBannerMessages() {
    banner.innerHTML = '';
    bannerMessages.forEach(msg => {
        const span = document.createElement('div');
        span.className = 'marketing-message';
        span.textContent = msg;
        banner.appendChild(span);
    });
}
showBannerMessages();

shopBtn.addEventListener('click', () => {
    const btnRect = shopBtn.getBoundingClientRect();
    const modalRect = shopModal.getBoundingClientRect();
    const centerX = btnRect.left + btnRect.width/2 - modalRect.width/2;
    const centerY = btnRect.top + btnRect.height + 10; // just below button
    shopModal.style.bottom = 'auto';
    shopModal.style.right = 'auto';
    shopModal.style.top = `${centerY}px`;
    shopModal.style.left = `${centerX}px`;

    // Move banner above modal
    banner.style.top = `${centerY - 40}px`;
});
