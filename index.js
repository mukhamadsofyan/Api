const express = require('express');
const cors = require('cors');
const app = express();

// Gunakan port dari Railway / environment variable
const port = process.env.PORT || 3000;

app.use(cors());

// Data bidang
const bidang = [
  { id: 1, nama: "Bidang Humas" },
  { id: 2, nama: "Bidang Kegiatan" },
  { id: 3, nama: "Bidang Keuangan" },
  { id: 4, nama: "Bidang IT" },
  { id: 5, nama: "Bidang Pendidikan" },
  { id: 6, nama: "Bidang Kesehatan" },
  { id: 7, nama: "Bidang Lingkungan" },
  { id: 8, nama: "Bidang Teknologi" },
  { id: 9, nama: "Bidang Olahraga" },
  { id: 10, nama: "Bidang Seni" },
  { id: 11, nama: "Bidang Pengembangan SDM" },
  { id: 12, nama: "Bidang Kepemudaan" },
  { id: 13, nama: "Bidang Kebudayaan" },
  { id: 14, nama: "Bidang Ekonomi" },
  { id: 15, nama: "Bidang Pertanian" },
  { id: 16, nama: "Bidang Pariwisata" },
  { id: 17, nama: "Bidang Perikanan" },
  { id: 18, nama: "Bidang Transportasi" },
  { id: 19, nama: "Bidang Energi" },
  { id: 20, nama: "Bidang Kewirausahaan" },
  { id: 21, nama: "Bidang Infrastruktur" },
  { id: 22, nama: "Bidang Keamanan" },
  { id: 23, nama: "Bidang Komunikasi" },
  { id: 24, nama: "Bidang Relawan" },
  { id: 25, nama: "Bidang Sosial" },
  { id: 26, nama: "Bidang Perpustakaan" },
  { id: 27, nama: "Bidang Penelitian" },
  { id: 28, nama: "Bidang Transportasi Publik" },
  { id: 29, nama: "Bidang Logistik" },
  { id: 30, nama: "Bidang Pemberdayaan Masyarakat" },
  { id: 31, nama: "Bidang Perdagangan" },
  { id: 32, nama: "Bidang Pengabdian" },
  { id: 33, nama: "Bidang Seni Rupa" },
  { id: 34, nama: "Bidang Musik" },
  { id: 35, nama: "Bidang Teater" },
  { id: 36, nama: "Bidang Film" },
  { id: 37, nama: "Bidang Desain" },
  { id: 38, nama: "Bidang Literasi" },
  { id: 39, nama: "Bidang Kewanitaan" },
  { id: 40, nama: "Bidang Pemuda" },
  { id: 41, nama: "Bidang Pendidikan Nonformal" },
  { id: 42, nama: "Bidang Teknologi Digital" },
  { id: 43, nama: "Bidang Data & Statistik" },
  { id: 44, nama: "Bidang Hubungan Internasional" },
  { id: 45, nama: "Bidang Advokasi" },
  { id: 46, nama: "Bidang Hukum" },
  { id: 47, nama: "Bidang K3 (Keselamatan Kerja)" },
  { id: 48, nama: "Bidang Penanggulangan Bencana" },
  { id: 49, nama: "Bidang Media Sosial" },
  { id: 50, nama: "Bidang Startup & Inovasi" },
];


// Data program kerja (setiap bidang punya 3 program)
const programKerja = [
  // Bidang 1: Humas
  { id: 1, bidangId: 1, judul: "Sosialisasi Event", deskripsi: "Promosi kegiatan organisasi", tanggal: "2025-11-01" },
  { id: 2, bidangId: 1, judul: "Press Release", deskripsi: "Membuat press release kegiatan", tanggal: "2025-11-03" },
  { id: 3, bidangId: 1, judul: "Media Partner", deskripsi: "Kerjasama dengan media lokal", tanggal: "2025-11-05" },
  { id: 4, bidangId: 1, judul: "Kampanye Digital", deskripsi: "Promosi via sosial media", tanggal: "2025-11-07" },
  { id: 5, bidangId: 1, judul: "Branding Organisasi", deskripsi: "Membuat identitas visual organisasi", tanggal: "2025-11-09" },

  // Bidang 2: Kegiatan
  { id: 6, bidangId: 2, judul: "Festival Tahunan", deskripsi: "Mengorganisir festival tahunan", tanggal: "2025-11-02" },
  { id: 7, bidangId: 2, judul: "Workshop Kreatif", deskripsi: "Workshop untuk anggota", tanggal: "2025-11-04" },
  { id: 8, bidangId: 2, judul: "Pertemuan Rutin", deskripsi: "Rapat bulanan kegiatan", tanggal: "2025-11-06" },
  { id: 9, bidangId: 2, judul: "Outbond Anggota", deskripsi: "Kegiatan outdoor untuk bonding", tanggal: "2025-11-08" },
  { id: 10, bidangId: 2, judul: "Lomba Internal", deskripsi: "Mengadakan lomba antar anggota", tanggal: "2025-11-10" },

  // Bidang 3: Keuangan
  { id: 11, bidangId: 3, judul: "Laporan Keuangan", deskripsi: "Membuat laporan bulanan", tanggal: "2025-11-03" },
  { id: 12, bidangId: 3, judul: "Audit Internal", deskripsi: "Audit untuk transparansi", tanggal: "2025-11-05" },
  { id: 13, bidangId: 3, judul: "Budget Planning", deskripsi: "Perencanaan anggaran tahun depan", tanggal: "2025-11-07" },
  { id: 14, bidangId: 3, judul: "Pengumpulan Dana", deskripsi: "Mengorganisir fundraising", tanggal: "2025-11-09" },
  { id: 15, bidangId: 3, judul: "Evaluasi Pengeluaran", deskripsi: "Review pengeluaran bulanan", tanggal: "2025-11-11" },

  // Bidang 4: IT
  { id: 16, bidangId: 4, judul: "Upgrade Website", deskripsi: "Perbaikan tampilan website", tanggal: "2025-11-04" },
  { id: 17, bidangId: 4, judul: "Aplikasi Mobile", deskripsi: "Membuat aplikasi anggota", tanggal: "2025-11-06" },
  { id: 18, bidangId: 4, judul: "Database Management", deskripsi: "Update dan backup database", tanggal: "2025-11-08" },
  { id: 19, bidangId: 4, judul: "Keamanan Sistem", deskripsi: "Audit keamanan IT", tanggal: "2025-11-10" },
  { id: 20, bidangId: 4, judul: "Integrasi Cloud", deskripsi: "Migrasi layanan ke cloud", tanggal: "2025-11-12" },

  // Bidang 5: Pendidikan
  { id: 21, bidangId: 5, judul: "Pelatihan Anggota", deskripsi: "Mengadakan pelatihan anggota baru", tanggal: "2025-11-05" },
  { id: 22, bidangId: 5, judul: "Seminar Pendidikan", deskripsi: "Mengundang pembicara ahli", tanggal: "2025-11-07" },
  { id: 23, bidangId: 5, judul: "Bimbingan Belajar", deskripsi: "Pendampingan belajar anggota", tanggal: "2025-11-09" },
  { id: 24, bidangId: 5, judul: "Workshop Skill", deskripsi: "Pengembangan skill anggota", tanggal: "2025-11-11" },
  { id: 25, bidangId: 5, judul: "Evaluasi Pendidikan", deskripsi: "Review program belajar", tanggal: "2025-11-13" },

  // Bidang 6–50: dibuat dengan pola yang sama
  { id: 26, bidangId: 6, judul: "Program 1 Bidang 6", deskripsi: "Deskripsi Program 1 Bidang 6", tanggal: "2025-11-06" },
  { id: 27, bidangId: 6, judul: "Program 2 Bidang 6", deskripsi: "Deskripsi Program 2 Bidang 6", tanggal: "2025-11-07" },
  { id: 28, bidangId: 6, judul: "Program 3 Bidang 6", deskripsi: "Deskripsi Program 3 Bidang 6", tanggal: "2025-11-08" },
  { id: 29, bidangId: 6, judul: "Program 4 Bidang 6", deskripsi: "Deskripsi Program 4 Bidang 6", tanggal: "2025-11-09" },
  { id: 30, bidangId: 6, judul: "Program 5 Bidang 6", deskripsi: "Deskripsi Program 5 Bidang 6", tanggal: "2025-11-10" },

  { id: 31, bidangId: 7, judul: "Program 1 Bidang 7", deskripsi: "Deskripsi Program 1 Bidang 7", tanggal: "2025-11-11" },
  { id: 32, bidangId: 7, judul: "Program 2 Bidang 7", deskripsi: "Deskripsi Program 2 Bidang 7", tanggal: "2025-11-12" },
  { id: 33, bidangId: 7, judul: "Program 3 Bidang 7", deskripsi: "Deskripsi Program 3 Bidang 7", tanggal: "2025-11-13" },
  { id: 34, bidangId: 7, judul: "Program 4 Bidang 7", deskripsi: "Deskripsi Program 4 Bidang 7", tanggal: "2025-11-14" },
  { id: 35, bidangId: 7, judul: "Program 5 Bidang 7", deskripsi: "Deskripsi Program 5 Bidang 7", tanggal: "2025-11-15" },

  // … lanjutkan pola ini sampai bidangId 50, setiap bidang 5 prograNm
];


// Endpoint bidang
app.get('/api/bidang', (req, res) => {
  res.json(bidang);
});

// Endpoint program kerja berdasarkan bidangId
app.get('/api/programKerja/:bidangId', (req, res) => {
  const bidangId = parseInt(req.params.bidangId);
  const programs = programKerja.filter(p => p.bidangId === bidangId);
  res.json(programs);
});

// Listen dengan port dinamis
app.listen(port, () => console.log(`API running at port ${port}`));
