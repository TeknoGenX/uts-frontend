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


// Inisialisasi AOS (Animasi Scroll) - Placeholder/Simulasi
function initAOS() {
    console.log("Simulasi: AOS diinisialisasi. Jika Anda menggunakan library AOS, panggil AOS.init() di sini.");
}

// Inisialisasi Swiper (Slider Testimoni) - Placeholder/Simulasi
function initSwiper() {
    console.log("Simulasi: Swiper diinisialisasi. Jika Anda menggunakan library Swiper, panggil new Swiper() di sini.");
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
    
    // 3. Event Handling untuk form kegiatan
    handleKegiatanForm();

    // 4. Inisialisasi Library (Simulasi/Placeholder)
    initAOS();
    initSwiper();

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