document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobilePanel = document.getElementById('mobile-panel');
  if(menuBtn){ menuBtn.addEventListener('click', ()=> mobilePanel.classList.toggle('hidden')); }

  // Donate modal
  const fab = document.getElementById('fab-donate');
  const modal = document.getElementById('donate-modal');
  const modalClose = document.getElementById('donate-close');
  if(fab){ fab.addEventListener('click', ()=> modal.classList.remove('hidden')); }
  if(modalClose){ modalClose.addEventListener('click', ()=> modal.classList.add('hidden')); }
  // close when clicking backdrop
  modal?.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.add('hidden'); });

  // Back-to-top button
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 400) btt.classList.add('show'); else btt.classList.remove('show');
  });
  btt.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  // Simple filter for kegiatan
  const filterInput = document.getElementById('kegiatan-filter');
  filterInput?.addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.kegiatan-card').forEach(card=>{
      const txt = (card.dataset.title || '') + ' ' + (card.dataset.desc || '');
      card.style.display = txt.toLowerCase().includes(q) ? 'block' : 'none';
    });
  });

  // Minimal donate form placeholder (no backend integration)
  const donateForm = document.getElementById('donate-form');
  donateForm?.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const amt = document.getElementById('donate-amount').value || 'Rp.0';
    alert('Terima kasih — simulasi donasi ' + amt + '\n(Implementasikan endpoint server untuk menyimpan transaksi)');
    modal.classList.add('hidden');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if(href.length>1){ ev.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
