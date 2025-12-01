/**
 * File: JS/script.js
 * Fungsi: Mengontrol semua fungsi interaktif antar halaman (sesuai instruksi 9)
 * Memanfaatkan Variabel, Fungsi, Event Handling, dan Manipulasi DOM (sesuai kriteria UTS)
 */

// Kriteria UTS: Variabel dan tipe data dasar
const header = document.getElementById('header');
const backToTopButton = document.getElementById('back-to-top');
const navbar = document.getElementById('navbar');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

// Kriteria UTS: Minimal 1 fungsi buatan sendiri
function handleScroll() {
    // Scroll behavior: Sticky Header
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
}

function handleMobileNav() {
    // Kriteria UTS: Manipulasi DOM (mengubah class)
    document.body.classList.toggle('mobile-nav-active');
}

/**
 * Fungsi untuk menangani form penambahan kegiatan baru.
 */
function handleKegiatanForm() {
    const form = document.getElementById('formKegiatan');
    if (!form) return; // Hanya jalankan jika form ada di halaman

    let timelineItemCount = document.querySelectorAll('.timeline-item').length;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nama = form.elements['namaKegiatan'].value.trim();
        const tanggal = form.elements['tanggalKegiatan'].value;
        const deskripsi = form.elements['deskripsiKegiatan'].value.trim();
        const feedbackElement = document.getElementById('feedbackKegiatan');

        if (nama === '' || tanggal === '') {
            feedbackElement.textContent = 'Nama Kegiatan dan Tanggal wajib diisi.';
            feedbackElement.style.display = 'block';
            feedbackElement.style.backgroundColor = '#f8d7da';
            feedbackElement.style.color = '#721c24';
            return;
        }

        const timelineContainer = document.querySelector('.kegiatan-timeline');
        
        // Tentukan posisi item (kiri/kanan)
        const positionClass = (timelineItemCount % 2 === 0) ? 'left' : 'right';
        timelineItemCount++;

        // Buat elemen baru
        const newItem = document.createElement('div');
        newItem.classList.add('timeline-item', positionClass);
        newItem.setAttribute('data-aos', `fade-${positionClass}`); // Tambahkan animasi

        const date = new Date(tanggal);
        const formattedDate = date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

        newItem.innerHTML = `
            <div class="timeline-content">
                <h4>${nama}</h4>
                <small class="text-secondary">${formattedDate}</small>
                <p>${deskripsi || 'Tidak ada deskripsi.'}</p>
            </div>
        `;

        // Tambahkan elemen baru ke awal linimasa
        timelineContainer.prepend(newItem);

        // Tampilkan feedback sukses
        feedbackElement.textContent = 'Kegiatan berhasil ditambahkan!';
        feedbackElement.style.display = 'block';
        feedbackElement.style.backgroundColor = '#d4edda';
        feedbackElement.style.color = '#155724';

        // Reset form
        form.reset();

        // Sembunyikan feedback setelah beberapa detik
        setTimeout(() => {
            feedbackElement.style.display = 'none';
        }, 3000);
    });
}

/**
 * Fungsi untuk menangani validasi form kontak.
 */
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const feedbackElement = document.getElementById('feedbackMessage');
        let isValid = true;
        let errorMessage = '';

        // Reset feedback
        feedbackElement.style.display = 'none';
        feedbackElement.className = 'feedback-message';
        
        // Validasi sederhana
        const nama = form.elements['nama'].value.trim();
        const email = form.elements['email'].value.trim();
        const pesan = form.elements['pesan'].value.trim();
        const privacyChecked = form.elements['privacy'].checked;
        const prioritasSelected = form.elements['prioritas'].value;
        
        if (nama === '' || email === '' || pesan === '' || prioritasSelected === '') {
            errorMessage = 'Semua kolom bertanda bintang (*) wajib diisi.';
            isValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            errorMessage = 'Format email tidak valid.';
            isValid = false;
        } else if (pesan.length < 10) {
            errorMessage = 'Pesan terlalu pendek (minimal 10 karakter).';
            isValid = false;
        } else if (!privacyChecked) {
             errorMessage = 'Anda harus menyetujui kebijakan privasi.';
             isValid = false;
        }
        
        // Feedback ke pengguna
        if (isValid) {
            console.log("Data Terkirim:", {
                nama: nama,
                email: email,
                subjek: form.elements['subjek'].value,
                prioritas: prioritasSelected,
                pesan: pesan
            });
            
            feedbackElement.textContent = 'Pesan Anda berhasil dikirim! Kami akan segera merespons.';
            feedbackElement.classList.add('success');
            feedbackElement.style.display = 'block';
            form.reset();
        } else {
            feedbackElement.textContent = 'Gagal mengirim pesan: ' + errorMessage;
            feedbackElement.classList.add('error');
            feedbackElement.style.display = 'block';
        }
    });
}


// Inisialisasi AOS (Animasi Scroll)
function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Inisialisasi Swiper (Slider Testimoni)
function initSwiper() {
    const swiperEl = document.querySelector('.swiper-container');
    if (!swiperEl) return;
    new Swiper(swiperEl, {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
}

// Inisialisasi Glightbox (Galeri Lightbox)
function initGlightbox() {
    const lightbox = GLightbox({
        selector: '.glightbox'
    });
}

// Inisialisasi Isotope (Filter Galeri)
function initIsotope() {
    const galeriContainer = document.querySelector('.galeri-grid');
    if (!galeriContainer) return;

    const iso = new Isotope(galeriContainer, {
        itemSelector: '.galeri-item',
        layoutMode: 'fitRows'
    });

    const filterButtons = document.querySelectorAll('.galeri-filter button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas aktif dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas aktif ke tombol yang diklik
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
        });
    });
}


// MAIN FUNCTION: Dipanggil saat dokumen siap
window.onload = function() {
    // 1. Event Handling (Scroll)
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. Event Handling (Mobile Nav Toggle)
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', handleMobileNav);
    }
    
    // 3. Event Handling untuk form-form
    handleKegiatanForm();
    handleContactForm();

    // 4. Inisialisasi Library secara kondisional
    if (typeof AOS !== 'undefined') {
        initAOS();
    }
    if (typeof Swiper !== 'undefined') {
        initSwiper();
    }
    if (typeof GLightbox !== 'undefined') {
        initGlightbox();
    }
    if (typeof Isotope !== 'undefined') {
        initIsotope();
    }


    // 5. Back to Top Click Handling
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};