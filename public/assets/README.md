# Folder Asset Portofolio Muhamad Rivai

Folder ini digunakan untuk menyimpan seluruh file gambar/foto untuk website portofolio, seperti:
- Foto profil / avatar (`avatar.jpg`, `profile.png`, dll.)
- Foto proyek / dokumentasi kerja
- Foto kegiatan organisasi & event

---

### Cara Mengakses di Kode:
File yang diletakkan di dalam folder `public/assets/` dapat langsung diakses di website melalui URL:
```
/assets/nama-foto.jpg
```

Contoh:
Jika Anda menyimpan foto profil dengan nama `profile.jpg` di folder ini, Anda dapat menghubungkannya di `public/data/portfolio-data.json`:
```json
"profile": {
  "name": "Muhamad Rivai",
  "avatar": "/assets/profile.jpg",
  "cardAvatar": "/assets/profile.jpg"
}
```
