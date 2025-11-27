# Laporan UTS Proyek uts-frontend

## Konteks Proyek
Proyek ini adalah sebuah website frontend untuk organisasi PERMAI-AYU (Persatuan Mahasiswa Indramayu DKI Jakarta). Website ini memiliki beberapa halaman statis seperti Beranda, Tentang, Struktur, Departemen, Kegiatan, dan Kontak.

## Perubahan dan Perbaikan yang Dilakukan

### 1. Klarifikasi Identitas Organisasi
-   Mengganti judul HTML di `index.html` untuk menyertakan nama lengkap organisasi: `PERMAI-AYU (Persatuan Mahasiswa Indramayu DKI Jakarta)`.
-   Memperbarui bagian "Apa itu PERMAI-AYU?" di `index.html` untuk secara eksplisit menyatakan bahwa PERMAI-AYU adalah singkatan dari Persatuan Mahasiswa Indramayu DKI Jakarta.
-   Memperbarui teks di bagian hero (`hero-content`) di `index.html` agar lebih sesuai dengan nama resmi organisasi.

### 2. Pembaruan Informasi Kontak
-   Mengubah alamat, email, dan nomor telepon di halaman `contact.html` sesuai dengan data yang disediakan oleh pengguna (Email: `teknogenx@gmail.com`, Telepon: `083839336561`).
-   Memperbarui email di bagian footer pada semua file HTML (`index.html`, `about.html`, `struktur.html`, `departments.html`, `kegiatan.html`, `pengurus.html`) agar konsisten dengan email yang baru.

### 3. Perbaikan Tampilan Beranda (Testimoni)
-   Mengatasi masalah tampilan berantakan di bagian testimoni pada `index.html` yang disebabkan oleh tidak aktifnya library Swiper.
-   Mengimplementasikan solusi CSS (`display: flex`, `overflow-x: auto`, `gap`) pada elemen `.swiper-wrapper` di `CSS/style.css` untuk mengubah kartu testimoni menjadi daftar yang dapat digulir secara horizontal, sehingga tampil lebih rapi dan fungsional tanpa JavaScript tambahan.

### 4. Penambahan Informasi Acara dan Struktur Panitia
-   Menambahkan item baru ke linimasa kegiatan di `kegiatan.html` untuk acara "Permai-Ayu Goes To School (PGTS) Tahun 2025" dengan tanggal 12 Januari 2025.
-   Menambahkan bagian baru yang terperinci di `kegiatan.html` yang menampilkan seluruh susunan panitia (Dewan Pelindung, Dewan Pembina, Penanggung Jawab, Steering Committee, Organizing Committee) untuk acara PGTS 2025, dengan data yang diambil langsung dari file PDF `SK PGTS 2025 FIXXX.pdf`.

## Observasi
-   File PDF digunakan sebagai sumber kebenaran untuk informasi organisasi dan detail acara.
-   Terdapat kebutuhan untuk memastikan konsistensi data antara dokumen internal (PDF) dan tampilan website.
-   Responsivitas dan kebersihan kode CSS sudah cukup baik, namun ada kebutuhan untuk mengaktifkan atau mengganti fungsionalitas dari library JavaScript yang belum terintegrasi (seperti Swiper.js dan AOS).
