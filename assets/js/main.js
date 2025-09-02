/* ============================================ */
/* assets/js/main.js */
/* ============================================ */


// Mobile nav toggle
(function(){
const btn=document.querySelector('.nav-toggle');
const links=document.querySelector('.navlinks');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
})();


// Reveal-on-scroll
(function(){
const obs=new IntersectionObserver((entries)=>{
entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();


// Tabs
(function(){
document.querySelectorAll('.tabs').forEach(box=>{
const buttons=box.querySelectorAll('[data-tab]');
const panels=box.querySelectorAll('.tab-panel');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
buttons.forEach(b=>b.classList.remove('active'));
panels.forEach(p=>p.classList.remove('active'));
btn.classList.add('active');
const id=btn.getAttribute('data-tab');
const panel=box.querySelector(`#${id}`);
if(panel) panel.classList.add('active');
}));
if(buttons[0]) buttons[0].click();
});
})();


// Lightbox (gallery)
(function(){
const lb=document.getElementById('lightbox');
if(!lb) return;
document.querySelectorAll('.gallery img').forEach(img=>{
img.addEventListener('click',()=>{
const big=lb.querySelector('img');
big.src=img.src; lb.classList.add('show');
});
});
lb.addEventListener('click',()=>lb.classList.remove('show'));
})();


/* ============================================ */


// Mobile nav toggle
(function(){
const btn=document.querySelector('.nav-toggle');
const links=document.querySelector('.navlinks');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
})();


// Reveal-on-scroll
(function(){
const obs=new IntersectionObserver((entries)=>{
entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();


// Tabs
(function(){
  document.querySelectorAll('.tabs').forEach(box => {
    const buttons = box.querySelectorAll('[data-tab]');
    const panels = box.querySelectorAll('.tab-panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const id = btn.getAttribute('data-tab');
        const panel = box.querySelector(`#${id}`);
        if (panel) panel.classList.add('active');
      });
    });

    // Activate first tab by default
    if (buttons[0]) buttons[0].click();
  });
})();


// Collapsible flight cards
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.flight-header').forEach(header => {
    header.addEventListener('click', () => {
        console.log("Clicked:", header.textContent); // debug log
      header.parentElement.classList.toggle('open');
    });
  });
});

