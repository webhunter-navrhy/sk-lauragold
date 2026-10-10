const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();e.target.innerHTML='<p class="serif" style="font-size:1.8rem">Ďakujeme, ozveme sa Vám.</p><p style="color:#a79c97">Ukážka formulára – v hotovej verzii chodia dopyty priamo na Váš e-mail.</p>'});
