# Laporan Ujian Tengah Semester (UTS) - Pemrograman Front-End

**Judul Aplikasi:** Website Portal Organisasi PERMAI-AYU

|                 |                                                  |
| --------------- | ------------------------------------------------ |
| **Nama**        | Andi Liani                                       |
| **NIM**         | 1003240053                                     |
| **Kelas**       | Eksekutif                                        |
| **Mata Kuliah** | IF220 - Pemrograman Front-End                    |
| **Dosen**       | Taufik Iqbal Ramdhani, S.Kom., M.Sc.             |
| **Tanggal**     | 27 November 2025                                 |

---

## 1. Pendahuluan

### Latar Belakang
PERMAI-AYU (Persatuan Mahasiswa Indramayu DKI Jakarta) adalah sebuah organisasi kemahasiswaan yang membutuhkan wadah digital untuk menyebarkan informasi, menampilkan struktur organisasi, dan mendokumentasikan kegiatannya. Website ini berfungsi sebagai portal informasi utama bagi anggota, calon anggota, dan masyarakat umum yang ingin mengetahui lebih banyak tentang PERMAI-AYU.

### Tujuan Aplikasi
Tujuan dari proyek ini adalah membangun sebuah aplikasi web front-end yang informatif, interaktif, dan mudah diakses, yang memenuhi kebutuhan-kebutuhan berikut:
- Menyajikan informasi dasar mengenai profil, visi, dan misi organisasi.
- Menampilkan struktur kepengurusan dan bagan organisasi.
- Menjadi galeri untuk kegiatan-kegiatan yang telah dan akan dilaksanakan.
- Menyediakan formulir kontak untuk komunikasi dengan pihak eksternal.

---

## 2. Analisis UX Singkat

### Target Pengguna
1.  **Mahasiswa Aktif PERMAI-AYU**: Untuk mendapatkan informasi terbaru mengenai kegiatan, pengumuman, dan struktur internal.
2.  **Calon Mahasiswa / Siswa SMA**: Sebagai sumber informasi utama untuk mengenal organisasi sebelum bergabung.
3.  **Alumni dan Mitra Eksternal**: Untuk tetap terhubung dengan organisasi dan melihat perkembangan serta kegiatan yang dilakukan.

### Persona Pengguna
-   **Nama**: Salman (18 tahun)
-   **Profil**: Siswa SMA di Indramayu yang baru saja diterima di sebuah universitas di Jakarta. Ia aktif mencari informasi tentang organisasi kedaerahan untuk membantunya beradaptasi di lingkungan baru.
-   **Tujuan**: Salman ingin mengetahui apa saja kegiatan yang biasa dilakukan PERMAI-AYU, siapa saja pengurusnya, dan bagaimana cara bergabung atau menghubungi organisasi tersebut.

### User Task Utama
1.  **Mencari Informasi Profil**: Pengguna dapat dengan mudah menemukan halaman "Tentang" untuk memahami sejarah, visi, dan misi organisasi.
2.  **Melihat Struktur Kepengurusan**: Pengguna dapat mengakses halaman "Struktur" dan "Kepengurusan" untuk mengetahui siapa saja yang bertanggung jawab di organisasi.
3.  **Menjelajahi Kegiatan**: Pengguna dapat mengunjungi halaman "Kegiatan" untuk melihat galeri foto dan linimasa acara yang telah diadakan.

---

## 3. Perancangan UI/UX

### Sketsa / Wireframe
Proses perancangan tidak menggunakan sketsa atau wireframe formal. Sebaliknya, struktur dan layout dirancang langsung dalam kode dengan mengikuti hierarki konten yang logis dan standar web, yaitu:
1.  **Header**: Berisi logo dan navigasi utama yang konsisten di setiap halaman.
2.  **Main Content**: Area konten utama yang bervariasi antar halaman, dibagi menjadi beberapa `section` yang jelas.
3.  **Footer**: Berisi informasi kontak singkat dan link cepat.

### Layout (Box Model, Flexbox, & Grid)
-   **Box Model**: Konsep margin, padding, dan border diterapkan secara konsisten pada semua elemen (kartu, tombol, section) untuk memberikan `whitespace` yang cukup dan meningkatkan keterbacaan.
-   **Flexbox**: Digunakan pada header untuk menata logo dan navigasi, serta pada kartu-kartu testimoni agar dapat digulir secara horizontal pada perangkat mobile.
-   **CSS Grid**: Menjadi andalan utama untuk layout yang kompleks, seperti pada:
    -   Galeri departemen (`departments-grid` di `index.html`).
    -   Bagan struktur organisasi (`org-chart` di `struktur.html`).
    -   Galeri foto kegiatan (`galeri-grid` di `kegiatan.html`).
    -   Daftar pengurus per departemen (`member-grid-full` di `pengurus.html`).

### Desain Visual
-   **Tipografi**: Menggunakan font **Inter** dari Google Fonts, sebuah font sans-serif yang modern dan sangat mudah dibaca di berbagai ukuran layar. Hierarki visual diciptakan dengan variasi ketebalan (weight) dan ukuran font untuk judul, subjudul, dan teks utama.
-   **Warna**: Palet warna didominasi oleh **biru (`#007bff`)** sebagai warna primer, yang memberikan kesan profesional, tenang, dan terpercaya. Warna ini digunakan untuk tombol aksi, link, dan elemen interaktif lainnya. Warna sekunder seperti abu-abu dan hitam digunakan untuk teks demi menjaga kontras dan keterbacaan.
-   **Komponen**: Tombol didesain dengan sudut membulat dan `drop-shadow` halus untuk memberikan kesan modern. Kartu-kartu informasi juga memiliki `box-shadow` untuk menciptakan kedalaman visual.

---

## 4. Implementasi

### Struktur Folder Proyek
Struktur folder diorganisir secara logis untuk memisahkan antara konten (HTML), styling (CSS), dan logika (JS).
```
/uts-frontend/
├─── about.html
├─── contact.html
├─── departments.html
├─── index.html
├─── kegiatan.html
├─── pengurus.html
├─── struktur.html
├─── CSS/
│   └─── style.css
├─── JS/
    └─── script.js

```

### Screenshot Halaman
Berikut adalah daftar halaman utama yang telah diimplementasikan:
1.  **Halaman Beranda (`index.html`)**: Menampilkan hero banner, info singkat, preview departemen, kegiatan terbaru, dan testimoni.
2.  **Halaman Tentang (`about.html`)**: Berisi sejarah, visi, dan misi organisasi.
3.  **Halaman Struktur (`struktur.html`)**: Menampilkan bagan hierarki organisasi.
4.  **Halaman Kegiatan (`kegiatan.html`)**: Dilengkapi linimasa (timeline), form interaktif, dan galeri foto dengan filter.
5.  **Halaman Kontak (`contact.html`)**: Mengandung informasi kontak dan form interaktif dengan validasi JavaScript.

### Potongan Kode Penting
Untuk mengaktifkan fungsionalitas dinamis seperti animasi dan slider, beberapa library JavaScript diintegrasikan. Logika inisialisasinya dipusatkan di `JS/script.js`.

**Contoh 1: Inisialisasi AOS (Animate On Scroll)**
Fungsi ini mengaktifkan animasi `fade-up`, `fade-left`, dll., pada elemen saat pengguna melakukan scroll.
```javascript
// Inisialisasi AOS (Animasi Scroll)
function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
```

**Contoh 2: Inisialisasi Swiper.js (Testimonial Slider)**
Fungsi ini mengubah daftar testimoni statis menjadi slider interaktif yang dapat berputar otomatis.
```javascript
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
        pagination: { /* ... konfigurasi ... */ }
    });
}
```

---

## 5. Pengujian Singkat

Skenario pengujian dilakukan secara manual untuk memastikan fungsionalitas utama berjalan dengan baik.

**Skenario 1: Validasi Form Kontak**
1.  **Aksi**: Buka halaman `contact.html`, isi nama dan email, tetapi biarkan kolom pesan kosong, lalu klik tombol "Kirim Pesan".
2.  **Hasil yang Diharapkan**: Muncul pesan error di bawah form yang menyatakan "Gagal mengirim pesan: Semua kolom bertanda bintang (*) wajib diisi."
3.  **Status**: **BERHASIL**.

**Skenario 2: Interaktivitas Galeri Foto**
1.  **Aksi**: Buka halaman `kegiatan.html`, klik tombol filter "Seminar" pada bagian galeri.
2.  **Hasil yang Diharapkan**: Galeri hanya menampilkan foto-foto yang memiliki kategori "Seminar".
3.  **Status**: **BERHASIL**.

**Skenario 3: Penambahan Kegiatan Baru**
1.  **Aksi**: Pada halaman `kegiatan.html`, isi form "Tambah Kegiatan Baru" dengan data valid, lalu klik tombol "Tambahkan ke Linimasa".
2.  **Hasil yang Diharapkan**: Item baru muncul di bagian paling atas linimasa kegiatan dan form menjadi kosong kembali.
3.  **Status**: **BERHASIL**.

---

## 6. Penutup

### Kesimpulan
Proyek ini berhasil mengimplementasikan sebuah website frontend fungsional untuk PERMAI-AYU dengan memenuhi semua spesifikasi yang diberikan. Website ini memiliki 3 fitur utama yang interaktif: (1) **Linimasa dan Form Penambahan Kegiatan**, (2) **Galeri Foto dengan Filter dan Lightbox**, dan (3) **Slider Testimoni**. Seluruh halaman telah dibuat responsif dan menggunakan JavaScript untuk meningkatkan pengalaman pengguna.

### Refleksi dan Pembelajaran
Tantangan utama dalam proyek ini adalah mengintegrasikan beberapa library JavaScript (AOS, Swiper, Isotope, Glightbox) agar dapat bekerja secara harmonis di halaman yang berbeda. Awalnya, kode untuk library ini tersebar dan tidak aktif. Proses refactoring dengan memusatkan semua inisialisasi ke dalam `JS/script.js` dan memuat library dari CDN menjadi solusi yang efektif. Proyek ini memberikan pembelajaran berharga tentang pentingnya manajemen kode JavaScript yang bersih dan terpusat, serta bagaimana cara kerja library pihak ketiga untuk memperkaya fungsionalitas front-end.

---

## 7. Informasi Repository

Source code lengkap untuk proyek ini dapat diakses melalui repository GitHub berikut:

**URL GitHub:** `https://github.com/TeknoGenX/uts-frontend` (placeholder)
