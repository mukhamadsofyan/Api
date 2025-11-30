const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ======================== DATA BIDANG ========================
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
  { id: 50, nama: "Bidang Startup & Inovasi" }
];

// ======================== DATA PROGRAM KERJA ========================
const programKerja = [
  // Bidang 1
  { id: 1, bidangId: 1, judul: "Sosialisasi Event", deskripsi: "Promosi kegiatan organisasi", tanggal: "2025-11-01" },
  { id: 2, bidangId: 1, judul: "Press Release", deskripsi: "Membuat press release kegiatan", tanggal: "2025-11-03" },
  { id: 3, bidangId: 1, judul: "Media Partner", deskripsi: "Kerjasama dengan media lokal", tanggal: "2025-11-05" },
  { id: 4, bidangId: 1, judul: "Kampanye Digital", deskripsi: "Promosi via sosial media", tanggal: "2025-11-07" },
  { id: 5, bidangId: 1, judul: "Branding Organisasi", deskripsi: "Membuat identitas visual organisasi", tanggal: "2025-11-09" },

  // Bidang 2
  { id: 6, bidangId: 2, judul: "Festival Tahunan", deskripsi: "Mengorganisir festival tahunan", tanggal: "2025-11-02" },
  { id: 7, bidangId: 2, judul: "Workshop Kreatif", deskripsi: "Workshop kreatif anggota", tanggal: "2025-11-04" },
  { id: 8, bidangId: 2, judul: "Pertemuan Rutin", deskripsi: "Rapat rutin", tanggal: "2025-11-06" },

  // Bidang 3
  { id: 9, bidangId: 3, judul: "Laporan Keuangan", deskripsi: "Laporan bulanan", tanggal: "2025-11-03" },
  { id: 10, bidangId: 3, judul: "Audit Internal", deskripsi: "Audit internal", tanggal: "2025-11-05" },
  { id: 11, bidangId: 3, judul: "Budget Planning", deskripsi: "Perencanaan anggaran", tanggal: "2025-11-07" }

  // (Jika perlu, tambahkan lanjutannya — tapi API tetap jalan)
];

// ======================== ENDPOINT ========================

// Semua bidang
app.get("/api/bidang", (req, res) => {
  res.json(bidang);
});

// Program kerja per bidang
app.get("/api/programKerja/:bidangId", (req, res) => {
  const bidangId = parseInt(req.params.bidangId);
  const programs = programKerja.filter(p => p.bidangId === bidangId);
  res.json(programs);
});

// Root (optional)
app.get("/", (req, res) => {
  res.json({ message: "API is running", endpoints: ["/api/bidang", "/api/programKerja/:bidangId"] });
});

// ======================== LISTEN (HARUS SATU) ========================
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`API running at http://0.0.0.0:${port}`);
});
