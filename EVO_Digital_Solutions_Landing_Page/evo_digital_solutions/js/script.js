/* ============================================================
   EVO DIGITAL SOLUTIONS - PAGE INTERACTIONS
   File ini berisi interaksi portfolio, FAQ, dan form konsultasi.
   Logika asli dipertahankan; komentar hanya membantu pemahaman.
   ============================================================ */

// Portfolio Filtering logic
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        filterButtons.forEach(b => {
          b.classList.remove('bg-inverse-surface', 'text-inverse-primary');
          b.classList.add('bg-surface', 'text-on-surface-variant');
        });
        btn.classList.add('bg-inverse-surface', 'text-inverse-primary');
        btn.classList.remove('bg-surface', 'text-on-surface-variant');

        portfolioCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Accordion Toggle logic
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('.faq-icon');
        const isOpen = !content.classList.contains('hidden');

        // Close all
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

        if (!isOpen) {
          content.classList.remove('hidden');
          icon.classList.add('rotate-180');
        }
      });
    });

    // Form to WhatsApp redirect
    function handleFormSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('client-name').value.trim();
      const business = document.getElementById('client-business').value.trim();
      const service = document.getElementById('client-service').value;
      const note = document.getElementById('client-note').value.trim();

      const messageText = `Halo EVO Digital Solutions,%0A%0ASaya ingin konsultasi implementasi digital bisnis:%0A- Nama: ${encodeURIComponent(name)}%0A- Bisnis: ${encodeURIComponent(business)}%0A- Layanan Diminati: ${encodeURIComponent(service)}%0A- Catatan: ${encodeURIComponent(note)}%0A%0AMohon bantuan estimasi dan rekomendasi dari tim EVO. Terima kasih!`;
      
      const waUrl = `https://wa.me/6281234567890?text=${messageText}`;
      window.open(waUrl, '_blank');
    }
