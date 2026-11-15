import os
import json
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "public", "data", "portfolio-data.json")
OPT_ASSETS_DIR = os.path.join(BASE_DIR, "public", "assets", "optimized")
PPTX_OUTPUT = os.path.join(BASE_DIR, "Portofolio - Muhamad Rivai.pptx")

with open(DATA_FILE, "r", encoding="utf-8") as f:
    data = json.load(f)

def get_img(fname_base):
    p = os.path.join(OPT_ASSETS_DIR, fname_base + ".jpg")
    return p if os.path.exists(p) else None

# Colors
C_BG = RGBColor(9, 9, 12)
C_CARD = RGBColor(22, 21, 31)
C_CARD_BORDER = RGBColor(45, 43, 60)
C_LIME = RGBColor(166, 243, 13)
C_CYAN = RGBColor(56, 189, 248)
C_AMBER = RGBColor(251, 191, 36)
C_EMERALD = RGBColor(52, 211, 153)
C_WHITE = RGBColor(255, 255, 255)
C_LIGHT = RGBColor(203, 213, 225)
C_MUTED = RGBColor(148, 163, 184)

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6]

def set_slide_background(slide):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = C_BG

def add_header(slide, category_text, title_main, title_accent="", index_str=""):
    # Category tag
    tag_box = slide.shapes.add_textbox(Inches(0.6), Inches(0.4), Inches(8), Inches(0.4))
    tf = tag_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = f"●  {category_text.upper()}"
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = C_LIME
    
    # Title
    title_box = slide.shapes.add_textbox(Inches(0.6), Inches(0.75), Inches(10.5), Inches(0.8))
    tf = title_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    run1 = p.add_run()
    run1.text = title_main + " "
    run1.font.size = Pt(24)
    run1.font.bold = True
    run1.font.color.rgb = C_WHITE
    if title_accent:
        run2 = p.add_run()
        run2.text = title_accent
        run2.font.size = Pt(24)
        run2.font.bold = True
        run2.font.color.rgb = C_LIME
        
    # Index Pill
    if index_str:
        idx_box = slide.shapes.add_textbox(Inches(11.6), Inches(0.4), Inches(1.2), Inches(0.4))
        tf = idx_box.text_frame
        p = tf.paragraphs[0]
        p.text = index_str
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = C_MUTED
        p.alignment = PP_ALIGN.RIGHT

def add_footer(slide, section_name="PORTOFOLIO PROFESIONAL"):
    footer_box = slide.shapes.add_textbox(Inches(0.6), Inches(7.0), Inches(12.133), Inches(0.35))
    tf = footer_box.text_frame
    p = tf.paragraphs[0]
    r1 = p.add_run()
    r1.text = "MUHAMAD RIVAI  •  "
    r1.font.size = Pt(9.5)
    r1.font.color.rgb = C_MUTED
    r2 = p.add_run()
    r2.text = f"{section_name}  •  "
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = C_LIME
    r3 = p.add_run()
    r3.text = "mrpai267@gmail.com  |  +62 896-2267-1182  |  Jakarta, Indonesia"
    r3.font.size = Pt(9.5)
    r3.font.color.rgb = C_MUTED

def add_card(slide, left, top, width, height, fill_color=C_CARD, border_color=C_CARD_BORDER):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    shape.line.color.rgb = border_color
    shape.line.width = Pt(1)
    return shape

# ==========================================
# SLIDE 1: COVER
# ==========================================
s1 = prs.slides.add_slide(blank_layout)
set_slide_background(s1)

# Badge
b_box = s1.shapes.add_textbox(Inches(0.8), Inches(0.8), Inches(6.5), Inches(0.4))
p = b_box.text_frame.paragraphs[0]
p.text = "●  SIAP MENGHADAPI TANTANGAN BARU • AVAILABLE FOR WORK"
p.font.size = Pt(11)
p.font.bold = True
p.font.color.rgb = C_LIME

# Title Name
name_box = s1.shapes.add_textbox(Inches(0.8), Inches(1.2), Inches(7.5), Inches(1.2))
p = name_box.text_frame.paragraphs[0]
r1 = p.add_run()
r1.text = "MUHAMAD "
r1.font.size = Pt(44)
r1.font.bold = True
r1.font.color.rgb = C_WHITE
r2 = p.add_run()
r2.text = "RIVAI"
r2.font.size = Pt(44)
r2.font.bold = True
r2.font.color.rgb = C_LIME

# Role
role_box = s1.shapes.add_textbox(Inches(0.8), Inches(2.4), Inches(7.5), Inches(0.6))
p = role_box.text_frame.paragraphs[0]
p.text = "Welder 3G GMAW & SMAW | Quality Control | Store Leader & Marketing"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = C_LIGHT

# Desc
desc_box = s1.shapes.add_textbox(Inches(0.8), Inches(3.1), Inches(7.5), Inches(1.3))
tf = desc_box.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "Profesional multi-disiplin berlatar belakang S1 Desain Komunikasi Visual Universitas Indraprasta PGRI yang memadukan keahlian kreatif multimedia dengan presisi teknis pengelasan industri bersertifikasi BNSP & standar AWS, inspeksi Quality Control komponen otomotif, serta rekam jejak kepemimpinan cabang retail komersial berskala nasional."
p.font.size = Pt(12)
p.font.color.rgb = C_MUTED

# Highlights 2x2
hi_data = [
    "01. Sertifikasi BNSP Plate Welder 3G SMAW & GMAW (AWS)",
    "02. Certified Quality Control Komponen Otomotif (K3 & 5R)",
    "03. Store Leader Rekor Omzet Rp100 Juta/Hari (Pstore)",
    "04. S1 Desain Komunikasi Visual (DKV Unindra)"
]
for idx, hi_text in enumerate(hi_data):
    row, col = divmod(idx, 2)
    x = Inches(0.8 + col * 3.7)
    y = Inches(4.7 + row * 0.9)
    card = add_card(s1, x, y, Inches(3.5), Inches(0.75))
    tb = s1.shapes.add_textbox(x, y, Inches(3.5), Inches(0.75))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = hi_text
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = C_WHITE

# Hero Photo Right
hero_img = get_img("Foto-Profile-1")
if hero_img:
    add_card(s1, Inches(8.8), Inches(0.8), Inches(3.8), Inches(5.8), C_CARD, C_LIME)
    s1.shapes.add_picture(hero_img, Inches(8.9), Inches(0.9), Inches(3.6), Inches(4.7))
    st_box = s1.shapes.add_textbox(Inches(8.9), Inches(5.7), Inches(3.6), Inches(0.8))
    p = st_box.text_frame.paragraphs[0]
    p.text = "STATUS: SIAP REKRUTMEN\nVerified BNSP & AWS Standards"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = C_LIME
    p.alignment = PP_ALIGN.CENTER

add_footer(s1, "COVER & PENDAHULUAN")

# ==========================================
# SLIDE 2: ABOUT ME & STATS
# ==========================================
s2 = prs.slides.add_slide(blank_layout)
set_slide_background(s2)
add_header(s2, "TENTANG SAYA • PROFIL EKSEKUTIF", "Keahlian Industri &", "Identitas Visual", "02 / 14")

# Left Profile Card
add_card(s2, Inches(0.6), Inches(1.5), Inches(3.4), Inches(5.3))
prof2 = get_img("Foto-Profile-2")
if prof2:
    s2.shapes.add_picture(prof2, Inches(0.9), Inches(1.7), Inches(2.8), Inches(2.6))
p_info = s2.shapes.add_textbox(Inches(0.8), Inches(4.4), Inches(3.0), Inches(2.2))
tf = p_info.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "Muhamad Rivai, S.Ds"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf.add_paragraph()
p2.text = "Multi-Disciplinary Professional\n• S1 DKV Univ. Indraprasta PGRI\n• BNSP Welder 3G GMAW & SMAW\n• QC Komponen Otomotif (K3 & 5S)\n• Domisili: DKI Jakarta, Indonesia"
p2.font.size = Pt(10.5)
p2.font.color.rgb = C_MUTED

# Right Summary Box
add_card(s2, Inches(4.3), Inches(1.5), Inches(8.4), Inches(3.2), C_CARD, C_LIME)
sum_box = s2.shapes.add_textbox(Inches(4.5), Inches(1.6), Inches(8.0), Inches(3.0))
tf = sum_box.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "RINGKASAN PROFIL PROFESIONAL"
p.font.size = Pt(13)
p.font.bold = True
p.font.color.rgb = C_LIME
p2 = tf.add_paragraph()
p2.text = "Profesional multi-disiplin lulusan S1 Desain Komunikasi Visual Universitas Indraprasta PGRI yang memadukan keahlian fotografi dan videografi kreatif dengan ketelitian teknis industri. Memiliki komitmen karier tinggi pada perusahaan manufaktur, konstruksi, pertambangan, dan industri retail komersial.\n\nMemiliki kompetensi teknis bersertifikasi resmi dalam Quality Control (QC) serta pengelasan berlisensi BNSP (Plate Welder 3G SMAW & 3G GMAW standar AWS). Berpengalaman sebagai Store Leader & Marketing dalam membangun cabang retail dari nol, merancang strategi pemasaran, mencetak omzet harian hingga Rp100 Juta, serta pengendalian inventaris.\n\nTerbiasa bekerja dengan disiplin tinggi menggunakan alat ukur presisi (Go/No-Go, Feeler Gauge, Caliper), pembacaan gambar kerja (drawing), identifikasi visual cacat las, serta kepatuhan penuh pada WPS, 5R/5S, dan K3."
p2.font.size = Pt(10.5)
p2.font.color.rgb = C_LIGHT

# 4 Stat Cards
stats_info = [
    ("6+ Thn", "Pengalaman Kerja", "Manufaktur, QC, Retail", C_LIME),
    ("100Jt+", "Omzet Harian", "Pstore Tarakan Rekor", C_CYAN),
    ("8+", "Sertifikasi Resmi", "BNSP & Lembaga Negara", C_AMBER),
    ("100%", "Kepatuhan K3 & 5R", "AWS & WPS Standards", C_EMERALD)
]
for idx, (val, lbl, sub, col) in enumerate(stats_info):
    x = Inches(4.3 + idx * 2.15)
    add_card(s2, x, Inches(4.9), Inches(2.0), Inches(1.9))
    tb = s2.shapes.add_textbox(x, Inches(5.0), Inches(2.0), Inches(1.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = val
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = col
    p.alignment = PP_ALIGN.CENTER
    p2 = tf.add_paragraph()
    p2.text = f"{lbl}\n{sub}"
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = C_LIGHT
    p2.alignment = PP_ALIGN.CENTER

add_footer(s2, "PROFIL & RINGKASAN EKSEKUTIF")

# ==========================================
# SLIDE 3: 6 CORE COMPETENCIES
# ==========================================
s3 = prs.slides.add_slide(blank_layout)
set_slide_background(s3)
add_header(s3, "KEAHLIAN UTAMA • SERVICES & EXPERTISE", "6 Pilar Layanan &", "Kompetensi Unggulan", "03 / 14")

pillars = [
    ("Pengelasan Plat 3G GMAW (AWS)", "Pengelasan industri vertikal naik (3G) sambungan fillet 1F-3F dan kampuh 1G-3G metode MIG/MAG sesuai AWS D1.1, penyetelan voltase, kawat kontinu & WPS resmi.", "BNSP 2026", C_LIME),
    ("Pengelasan Plat 3G SMAW (AWS)", "Keahlian pengelasan standar AWS untuk fillet 1F-3F dan kampuh 1G-3G SMAW (Stick Electrode), mesin potong oxy-fuel & blender cut, serta perbaikan cacat las.", "BNSP 2026", C_LIME),
    ("Quality Control (QC) Otomotif", "Inspeksi mutu manufaktur knalpot, identifikasi cacat pengelasan visual, pengukuran alat ukur presisi (Go/No-Go, Feeler Gauge, Caliper), budaya 5R & K3.", "0 Defect Goal", C_CYAN),
    ("Leader & Marketing Store", "Membangun & memimpin operasional cabang dari nol, strategi pemasaran terpadu, pengelolaan inventaris, administrasi omzet harian hingga Rp100 Juta.", "Target Rp 100Jt", C_AMBER),
    ("Desain Komunikasi Visual & Konten", "Produksi materi visual kreatif, branding identitas korporat, materi promosi grafis, desain media sosial interaktif, dan kampanye digital daya tarik tinggi.", "100+ Assets", C_EMERALD),
    ("Produksi Video & Dokumentasi Event", "Pengeditan video profesional, produksi konten TikTok/Reels viral, dokumentasi event berskala nasional/internasional, dan video edukasi YouTube.", "50+ Videos", C_LIME)
]

for idx, (title, desc, badge, col) in enumerate(pillars):
    row, col_idx = divmod(idx, 3)
    x = Inches(0.6 + col_idx * 4.1)
    y = Inches(1.5 + row * 2.7)
    add_card(s3, x, y, Inches(3.9), Inches(2.5))
    tb = s3.shapes.add_textbox(x + Inches(0.2), y + Inches(0.15), Inches(3.5), Inches(2.2))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = f"PILAR 0{idx+1}  •  {badge}"
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = col
    p2 = tf.add_paragraph()
    p2.text = title
    p2.font.size = Pt(13)
    p2.font.bold = True
    p2.font.color.rgb = C_WHITE
    p3 = tf.add_paragraph()
    p3.text = desc
    p3.font.size = Pt(10)
    p3.font.color.rgb = C_MUTED

add_footer(s3, "6 PILAR KOMPETENSI UTAMA")

# ==========================================
# SLIDE 4: SKILLS MATRIX
# ==========================================
s4 = prs.slides.add_slide(blank_layout)
set_slide_background(s4)
add_header(s4, "MATRIKS KOMPETENSI • SKILLS BREAKDOWN", "Penguasaan Keahlian", "Teknis & Manajerial", "04 / 14")

skill_groups = [
    ("⚡ PENGELASAN & FABRIKASI LOGAM", [
        ("Welder 3G GMAW (MIG/MAG)", "Bersertifikat BNSP", C_LIME),
        ("Welder 3G SMAW (Stick Electrode)", "Sertifikasi BNSP", C_LIME),
        ("Mesin Potong Oxy-Fuel & Blender Cut", "Terampil", C_CYAN),
        ("Pembacaan Gambar Teknik (Drawing)", "Terampil", C_CYAN),
        ("Kepatuhan WPS & Standar AWS D1.1", "Standar Resmi", C_EMERALD),
        ("Welder Robotics (Pengelasan Robotik)", "Pemula", C_MUTED),
    ]),
    ("🔍 QUALITY CONTROL & K3 INDUSTRI", [
        ("Quality Control (QC) Otomotif", "Tersertifikasi", C_CYAN),
        ("Go/No-Go Gauge (Pengukuran Presisi)", "Ahli (Expert)", C_LIME),
        ("Feeler Gauge (Celah Baja)", "Ahli (Expert)", C_LIME),
        ("Caliper / Jangka Sorong", "Ahli (Expert)", C_LIME),
        ("Penerapan Budaya 5R / 5S Pabrik", "Disiplin Tinggi", C_EMERALD),
        ("Keselamatan & Kesehatan Kerja (K3)", "Standar Resmi", C_EMERALD),
    ]),
    ("📈 KEPEMIMPINAN RETAIL & MARKETING", [
        ("Store Branch Leadership (Membangun Cabang)", "Berpengalaman", C_AMBER),
        ("Pencapaian Omzet Rp100Jt/Hari", "Terbukti", C_LIME),
        ("Manajemen Inventaris & Stock Control", "Terampil", C_CYAN),
        ("Administrasi Keuangan & Kas Toko", "Terampil", C_CYAN),
        ("Strategi Pemasaran Media Sosial", "Berpengalaman", C_AMBER),
        ("Kemitraan Publik & Influencer Relations", "Berpengalaman", C_AMBER),
    ]),
    ("🎨 SOFTWARE & MEDIA KREATIF", [
        ("Adobe Premiere Pro (Video Editing)", "Mahir (Advanced)", C_EMERALD),
        ("Adobe Illustrator (Vector Graphic)", "Mahir (Advanced)", C_EMERALD),
        ("Capcut Pro (Shorts, Reels, TikTok)", "Mahir (Advanced)", C_EMERALD),
        ("Canva Pro (Social Media Design)", "Mahir (Advanced)", C_EMERALD),
        ("Fotografi & Videografi Profesional", "Mahir (Advanced)", C_EMERALD),
        ("Microsoft Office Suite (Word, Excel, PPT)", "Terampil", C_CYAN),
    ])
]

for idx, (grp_title, skills) in enumerate(skill_groups):
    row, col_idx = divmod(idx, 2)
    x = Inches(0.6 + col_idx * 6.2)
    y = Inches(1.5 + row * 2.7)
    add_card(s4, x, y, Inches(5.9), Inches(2.5))
    tb = s4.shapes.add_textbox(x + Inches(0.2), y + Inches(0.1), Inches(5.5), Inches(2.3))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = grp_title
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    for s_name, s_lvl, s_col in skills:
        p_s = tf.add_paragraph()
        r1 = p_s.add_run()
        r1.text = f"• {s_name}: "
        r1.font.size = Pt(10)
        r1.font.color.rgb = C_LIGHT
        r2 = p_s.add_run()
        r2.text = s_lvl
        r2.font.size = Pt(10)
        r2.font.bold = True
        r2.font.color.rgb = s_col

add_footer(s4, "MATRIKS KEAHLIAN PROFESIONAL")

# Helper for Project Slide Layout
def create_project_slide(prs, cat_tag, title, role, company, period, desc, bullets, tags, img_name, slide_num):
    s = prs.slides.add_slide(blank_layout)
    set_slide_background(s)
    add_header(s, cat_tag, title, "", f"{slide_num:02d} / 14")
    
    # Left: Image
    img_p = get_img(img_name)
    if img_p:
        add_card(s, Inches(0.6), Inches(1.5), Inches(4.8), Inches(5.3), C_CARD, C_LIME)
        s.shapes.add_picture(img_p, Inches(0.8), Inches(1.7), Inches(4.4), Inches(4.4))
        b_box = s.shapes.add_textbox(Inches(0.8), Inches(6.2), Inches(4.4), Inches(0.5))
        p = b_box.text_frame.paragraphs[0]
        p.text = f"{company}  •  {period}"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = C_LIME
        p.alignment = PP_ALIGN.CENTER
    
    # Right: Details
    add_card(s, Inches(5.7), Inches(1.5), Inches(7.0), Inches(5.3))
    tb = s.shapes.add_textbox(Inches(5.9), Inches(1.6), Inches(6.6), Inches(5.0))
    tf = tb.text_frame
    tf.word_wrap = True
    
    # Meta bar
    p = tf.paragraphs[0]
    p.text = f"Peran: {role}  |  Institusi: {company}  |  Periode: {period}"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = C_CYAN
    
    # Desc
    p2 = tf.add_paragraph()
    p2.text = f"\n{desc}\n"
    p2.font.size = Pt(10.5)
    p2.font.color.rgb = C_LIGHT
    
    # Bullets
    for b in bullets:
        pb = tf.add_paragraph()
        pb.text = f"✓  {b}"
        pb.font.size = Pt(10)
        pb.font.color.rgb = C_WHITE
        
    # Tags
    pt = tf.add_paragraph()
    pt.text = f"\nTags: {'  •  '.join(tags)}"
    pt.font.size = Pt(9.5)
    pt.font.bold = True
    pt.font.color.rgb = C_LIME
    
    add_footer(s, title)
    return s

# ==========================================
# SLIDE 5: PROJECT 1 - 3G GMAW
# ==========================================
create_project_slide(
    prs,
    "PROYEK MANUFAKTUR & PENGELASAN",
    "Fabrikasi & Pengelasan Plat 3G GMAW Standar AWS",
    "Welder Plat 3G GMAW",
    "BP3MI DKI Jakarta",
    "Okt - Nov 2026",
    "Melaksanakan pekerjaan pengelasan plat baja posisi 3G (vertikal naik) sambungan kampuh groove dan sambungan fillet menggunakan metode Gas Metal Arc Welding (GMAW / MIG-MAG) berpedoman pada standar American Welding Society (AWS) dan sertifikasi resmi BNSP.",
    [
        "Penyetelan Parameter Presisi: Menguasai kalibrasi voltase busur, kecepatan wire feed, dan regulasi gas pelindung (Ar/CO2).",
        "Pengelasan Posisi Vertikal 3G: Menjaga kolam lelehan stabil, penetrasi penuh, dan bebas cacat lack of fusion.",
        "Kepatuhan WPS & AWS D1.1: Membaca gambar teknik kerja dan prosedur WPS resmi untuk mencegah distorsi termal plat.",
        "Inspeksi Visual Mutu Las: Mendeteksi cacat undercut, porositas, spatter berlebih, dan retak mikro."
    ],
    ["Welding 3G GMAW", "BNSP Certified", "AWS D1.1", "MIG/MAG", "K3 & 5S"],
    "3G GMAW",
    5
)

# ==========================================
# SLIDE 6: PROJECT 2 - 3G SMAW
# ==========================================
create_project_slide(
    prs,
    "PROYEK MANUFAKTUR & PENGELASAN",
    "Fabrikasi & Pengelasan Plat 3G SMAW Standar AWS",
    "Welder Plat 3G SMAW",
    "PPKD Jakarta Timur / BP3MI",
    "April - Juni 2026",
    "Melakukan pengelasan plat baja posisi 1F, 2F, 3F fillet dan sambungan kampuh groove 1G, 2G, 3G menggunakan metode Shielded Metal Arc Welding (SMAW / Stick Welding) sesuai standar AWS dan sertifikasi resmi BNSP.",
    [
        "Teknik Pengelasan Vertikal 3G: Kontrol sudut elektroda terbungkus, panjang busur, dan travel speed stabil pada kampuh vertikal naik.",
        "Pemotongan Logam Presisi: Terampil mengoperasikan mesin potong blender, oxy-fuel (oksigen & asetilen), dan gerinda tangan.",
        "Pembacaan Blueprint & Drawing: Menganalisis instruksi kerja fabrikasi baja dan simbol pengelasan standar internasional.",
        "Inspeksi & Repair Cacat Las: Identifikasi visual slag inclusion, undercut, atau incomplete penetration dan repair sesuai WPS."
    ],
    ["Welding 3G SMAW", "BNSP Certified", "AWS Standard", "Oxy-Fuel Cutting", "WPS Adherence"],
    "PPKD",
    6
)

# ==========================================
# SLIDE 7: PROJECT 3 - QUALITY CONTROL
# ==========================================
create_project_slide(
    prs,
    "PROYEK QUALITY CONTROL OTOMOTIF",
    "Quality Control Komponen Otomotif (Knalpot & Exhaust)",
    "Quality Control (QC)",
    "PT. Komponen Futaba Nusapersada",
    "Juli - Okt 2026",
    "Bertanggung jawab atas inspeksi mutu manufaktur komponen otomotif (exhaust system / knalpot) di jalur produksi pabrik, memverifikasi kesesuaian dimensi dengan gambar kerja, memastikan standar toleransi presisi dan kepatuhan K3.",
    [
        "Pengukuran Alat Ukur Presisi: Mengoperasikan Go/No-Go Gauge cek diameter, Feeler Gauge cek celah, dan Caliper (Jangka Sorong).",
        "Minimalkan Produk NG: Analisis blueprint drawing untuk mendeteksi deviasi geometri tekukan pipa knalpot sebelum ke assembling.",
        "Inspeksi Visual Sambungan Las: Memeriksa manik las robotik/manual dari cacat pinhole, spatter, dan keutuhan penetrasi.",
        "Disiplin 5R/5S & Budaya K3: Mempertahankan area kerja pabrik bersih, tertib, dan aman setiap shift kerja."
    ],
    ["Quality Control", "Go/No-Go Gauge", "Feeler Gauge", "Caliper", "5R / 5S Culture"],
    "Nusapersada",
    7
)

# ==========================================
# SLIDE 8: PROJECT 4 - STORE LEADER TARAKAN
# ==========================================
create_project_slide(
    prs,
    "LEADERSHIP & RETAIL OPERATIONS",
    "Leader Cabang Pstore Tarakan & Manajemen Toko",
    "Store Leader",
    "PT. Putra Siregar Merakyat",
    "Januari - Juli 2025",
    "Ditugaskan langsung oleh manajemen pusat untuk merintis, membangun, dan membuka cabang Pstore baru dari nol (ground zero) di Kota Tarakan, Kalimantan Utara. Bertanggung jawab penuh memimpin seluruh operasional toko, staf, dan pemasaran.",
    [
        "Membangun Cabang Dari Nol: Setup toko, rekrutmen & training staf frontliner/kasir, perizinan, dan SOP operasional retail.",
        "Rekor Omzet Harian Rp100 Juta: Merancang strategi bundling promo, event pembukaan toko, mencetak rekor penjualan Rp100.000.000,-/hari.",
        "Kemitraan Media & PR: Kolaborasi dengan media lokal, figur publik daerah, dan komunitas pemuda Tarakan untuk branding.",
        "Kontrol Stok & Sosmed: Mengelola stok gadget bernilai tinggi tanpa selisih (zero variance) serta akun TikTok/Instagram cabang."
    ],
    ["Store Leadership", "Omzet Rp100Jt/Hari", "Inventory Control", "Public Relations", "Retail Growth"],
    "Tarakan",
    8
)

# ==========================================
# SLIDE 9: PROJECTS 5 & 6 (PAIRS)
# ==========================================
s9 = prs.slides.add_slide(blank_layout)
set_slide_background(s9)
add_header(s9, "OPERASIONAL RETAIL & EVENT INTERNASIONAL", "Sales Marketing Retail &", "Operasional Event Besar", "09 / 14")

# Card 1: Sales Depok
add_card(s9, Inches(0.6), Inches(1.5), Inches(5.9), Inches(5.3))
s_img = get_img("Sales")
if s_img:
    s9.shapes.add_picture(s_img, Inches(0.8), Inches(1.7), Inches(5.5), Inches(2.3))
tb1 = s9.shapes.add_textbox(Inches(0.8), Inches(4.1), Inches(5.5), Inches(2.6))
tf1 = tb1.text_frame
tf1.word_wrap = True
p = tf1.paragraphs[0]
p.text = "Sales Marketing & Manajemen Inventaris"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf1.add_paragraph()
p2.text = "PT. Putra Siregar Merakyat (Depok)  |  2022 - 2023\n\n• Mengorganisir dan mengelola inventaris retail gadget bernilai tinggi.\n• Pencatatan administrasi keuangan omzet dan pengawasan anggaran.\n• Membangun relasi komunikasi dengan konsumen retail (pelanggan loyal).\n• Merancang konten promosi media sosial untuk mendongkrak penjualan."
p2.font.size = Pt(10)
p2.font.color.rgb = C_LIGHT

# Card 2: Hyrox Event
add_card(s9, Inches(6.8), Inches(1.5), Inches(5.9), Inches(5.3))
h_img = get_img("HYROX")
if h_img:
    s9.shapes.add_picture(h_img, Inches(7.0), Inches(1.7), Inches(5.5), Inches(2.3))
tb2 = s9.shapes.add_textbox(Inches(7.0), Inches(4.1), Inches(5.5), Inches(2.6))
tf2 = tb2.text_frame
tf2.word_wrap = True
p = tf2.paragraphs[0]
p.text = "Crew Shopkeeper Event Internasional Hyrox"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf2.add_paragraph()
p2.text = "Hyrox Jakarta (International Fitness Race)  |  Juni 2026\n\n• Manajemen logistik toko merchandise apparel resmi Hyrox 2026.\n• Melayani ribuan pengunjung dan atlet mancanegara dengan prima.\n• Mengendalikan stok official merchandise dan transaksi kasir event.\n• Koordinasi kelancaran antrean massa pengunjung selama hari perlombaan."
p2.font.size = Pt(10)
p2.font.color.rgb = C_LIGHT

add_footer(s9, "RETAIL & EVENT MANAGEMENT")

# ==========================================
# SLIDE 10: PROJECTS 7 & 8 (KIMIA FARMA & BKKBN)
# ==========================================
s10 = prs.slides.add_slide(blank_layout)
set_slide_background(s10)
add_header(s10, "MEDIA KREATIF & DOKUMENTASI KORPORAT", "Produksi Media Kreatif &", "Dokumenter Korporat", "10 / 14")

# Card 1: Kimia Farma
add_card(s10, Inches(0.6), Inches(1.5), Inches(5.9), Inches(5.3))
kf_img = get_img("Kimia-Farma")
if kf_img:
    s10.shapes.add_picture(kf_img, Inches(0.8), Inches(1.7), Inches(5.5), Inches(2.3))
tb1 = s10.shapes.add_textbox(Inches(0.8), Inches(4.1), Inches(5.5), Inches(2.6))
tf1 = tb1.text_frame
tf1.word_wrap = True
p = tf1.paragraphs[0]
p.text = "Media Kreatif & People Experience"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf1.add_paragraph()
p2.text = "PT. Kimia Farma Apotek  |  Mei - Agust 2024\n\n• Produksi video konten TikTok kreatif pada akun CeritaPharmacytizen.\n• Perancangan desain grafis feed & story Instagram Genbi_KFA.\n• Photoshoot profil karyawan berseragam resmi di outlet apotek.\n• Tim dokumentasi video/foto acara nasional Pharmacist Training 2024."
p2.font.size = Pt(10)
p2.font.color.rgb = C_LIGHT

# Card 2: BKKBN
add_card(s10, Inches(6.8), Inches(1.5), Inches(5.9), Inches(5.3))
bk_img = get_img("BKKBN")
if bk_img:
    s10.shapes.add_picture(bk_img, Inches(7.0), Inches(1.7), Inches(5.5), Inches(2.3))
tb2 = s10.shapes.add_textbox(Inches(7.0), Inches(4.1), Inches(5.5), Inches(2.6))
tf2 = tb2.text_frame
tf2.word_wrap = True
p = tf2.paragraphs[0]
p.text = "Video Dokumenter Dithanlan & Desain Visual"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf2.add_paragraph()
p2.text = "BKKBN Republik Indonesia  |  Sept - Nov 2021\n\n• Produksi dan editing serial video edukasi dokumenter YouTube Dithanlan.\n• Desain visual materi grafis sosialisasi sosial media resmi institusi.\n• Notulensi rapat koordinasi harian pimpinan via Zoom meeting eksekutif.\n• Mengikuti tugas dinas resmi pendampingan ke Walikota Depok."
p2.font.size = Pt(10)
p2.font.color.rgb = C_LIGHT

add_footer(s10, "MEDIA KREATIF & DOKUMENTASI")

# ==========================================
# SLIDE 11: CAREER TIMELINE
# ==========================================
s11 = prs.slides.add_slide(blank_layout)
set_slide_background(s11)
add_header(s11, "PENGALAMAN KERJA • CAREER HISTORY", "Rekam Jejak Karier", "Profesional Multidisiplin", "11 / 14")

timeline_items = [
    ("Okt - Nov 2026", "Pelatihan Bahasa Inggris (CPMI)", "Universitas Binawan", "Pelatihan resmi bahasa Inggris CPMI: percakapan kerja, self-introduction, grammar, listening & fluency.", "Bahasa & Komunikasi"),
    ("Okt - Nov 2026", "Welder Plat 3G GMAW", "BP3MI DKI Jakarta", "GMAW MIG/MAG 3G standar AWS D1.1, penyetelan voltase, kawat las, WPS BNSP.", "Fabrikasi / Las"),
    ("06 Juli - 03 Okt 2026", "Quality Control (QC)", "PT. Komponen Futaba Nusapersada", "Inspeksi knalpot otomotif dengan Go/No-Go Gauge, Feeler Gauge, Caliper, 5R & K3.", "Otomotif"),
    ("06 Apr - 19 Juni 2026", "Welder Plat 3G SMAW", "BP3MI / PPKD Jakarta Timur", "Pengelasan SMAW plat 1F-3F & 1G-3G standar AWS, pemotongan oxy-fuel & repair las.", "Fabrikasi / Las"),
    ("20 Jan - 20 Juli 2025", "Leader Store", "PT. Putra Siregar Merakyat (Tarakan)", "Membangun cabang dari nol, memimpin tim, mencetak rekor penjualan harian Rp100Jt.", "Retail / Ops"),
    ("17 Mei - 23 Agust 2024", "Culture & People Experience", "PT. Kimia Farma Apotek", "Konten TikTok CeritaPharmacytizen, desain Genbi_KFA, dokumentasi Pharmacist Training.", "Creative Media"),
    ("25 Feb 2022 - 03 Mar 2023", "Sales Marketing", "PT. Putra Siregar Merakyat (Depok)", "Manajemen inventaris retail bernilai tinggi, pembukuan omzet, dan promosi sosmed.", "Sales & Retail"),
    ("06 Sept - 03 Des 2021", "Praktek Kerja Lapangan (PKL)", "BKKBN Republik Indonesia", "Video dokumenter YouTube Dithanlan, desain grafis sosmed, dinas Walikota Depok.", "Gov Media")
]

for idx, (period, role, comp, desc, tag) in enumerate(timeline_items):
    y = Inches(1.5 + idx * 0.66)
    add_card(s11, Inches(0.6), y, Inches(12.133), Inches(0.60))
    tb = s11.shapes.add_textbox(Inches(0.8), y + Inches(0.02), Inches(11.7), Inches(0.55))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    r1 = p.add_run()
    r1.text = f"{period}  "
    r1.font.size = Pt(10)
    r1.font.bold = True
    r1.font.color.rgb = C_LIME
    r2 = p.add_run()
    r2.text = f"|  {role}  ({comp})  —  "
    r2.font.size = Pt(10.5)
    r2.font.bold = True
    r2.font.color.rgb = C_WHITE
    r3 = p.add_run()
    r3.text = desc
    r3.font.size = Pt(9.5)
    r3.font.color.rgb = C_LIGHT

add_footer(s11, "REKAM JEJAK PENGALAMAN KERJA")

# ==========================================
# SLIDE 12: EDUCATION & ORGANIZATIONS
# ==========================================
s12 = prs.slides.add_slide(blank_layout)
set_slide_background(s12)
add_header(s12, "PENDIDIKAN & ORGANISASI • BACKGROUND", "Fondasi Akademis &", "Pengalaman Lapangan", "12 / 14")

# Left Education
add_card(s12, Inches(0.6), Inches(1.5), Inches(5.9), Inches(2.5))
tb_e1 = s12.shapes.add_textbox(Inches(0.8), Inches(1.6), Inches(5.5), Inches(2.3))
tf = tb_e1.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "S1 Desain Komunikasi Visual (S.Ds)"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf.add_paragraph()
p2.text = "Universitas Indraprasta PGRI (UNINDRA)  |  2017 - 2023  |  IPK: 2.75\n\nMendalami komunikasi visual terapan, prinsip desain grafis korporat, produksi dan penyuntingan video profesional, fotografi, estetika komposisi, serta multimedia digital storytelling."
p2.font.size = Pt(10)
p2.font.color.rgb = C_LIGHT

add_card(s12, Inches(0.6), Inches(4.2), Inches(5.9), Inches(2.6))
tb_e2 = s12.shapes.add_textbox(Inches(0.8), Inches(4.3), Inches(5.5), Inches(2.4))
tf = tb_e2.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "Ilmu Pengetahuan Sosial (IPS)"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = C_WHITE
p2 = tf.add_paragraph()
p2.text = "MA AL - FATHIYAH  |  2014 - 2017  |  Nilai Akhir: 48.5\n\nLulus dengan fondasi kuat dalam ilmu komunikasi sosial, interaksi publik, pembentukan karakter kepemimpinan, dan kerja sama tim secara terorganisir."
p2.font.size = Pt(10)
p2.font.color.rgb = C_LIGHT

# Right Organizations
add_card(s12, Inches(6.8), Inches(1.5), Inches(5.9), Inches(5.3))
tb_org = s12.shapes.add_textbox(Inches(7.0), Inches(1.6), Inches(5.5), Inches(5.0))
tf = tb_org.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "🏆 REKAM JEJAK ORGANISASI & EVENT"
p.font.size = Pt(13)
p.font.bold = True
p.font.color.rgb = C_CYAN

orgs = [
    ("2026", "Crew Shopkeeper — Hyrox Jakarta", "Manajemen apparel merchandise resmi & pelayanan ribuan peserta kejuaraan fitness internasional."),
    ("2023", "Crew Floor & Ops — Pesta Semalam Minggu Vol.4", "Floor management, koordinasi alur penonton puluhan ribu massa festival musik, dan backstage."),
    ("2019", "Media Team — Depok 10K Run", "Peliputan ajang lari nasional, fotografi aksi olahraga cepat, dan publikasi media sosial."),
    ("2018", "Media Team — Samahita Photobook Expo", "Kurasi dokumentasi visual pameran fotografi, katalogisasi karya peserta, dan publikasi.")
]
for yr, o_title, o_desc in orgs:
    p_o = tf.add_paragraph()
    r1 = p_o.add_run()
    r1.text = f"\n{yr}  •  {o_title}\n"
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = C_LIME
    r2 = p_o.add_run()
    r2.text = o_desc
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = C_LIGHT

add_footer(s12, "PENDIDIKAN & ORGANISASI")

# ==========================================
# SLIDE 13: CERTIFICATES & LICENSES
# ==========================================
s13 = prs.slides.add_slide(blank_layout)
set_slide_background(s13)
add_header(s13, "LISENSI & SERTIFIKASI KOMPETENSI", "Sertifikasi Resmi BNSP &", "Lisensi Keahlian", "13 / 14")

certs = [
    ("Plate Welder : 3G GMAW", "Badan Nasional Sertifikasi Profesi (BNSP)", "2026", "Standar AWS", C_LIME),
    ("Pelatihan Kejuruan Las GMAW 3G", "BP3MI DKI Jakarta", "2026", "Industri Las", C_CYAN),
    ("Plate Welder : 3G SMAW", "Badan Nasional Sertifikasi Profesi (BNSP)", "2026", "Standar AWS", C_LIME),
    ("Pelatihan Kejuruan Las SMAW 3G", "PPKD Jakarta Timur", "2026", "Industri Las", C_CYAN),
    ("Staff Administrasi SDM", "Badan Nasional Sertifikasi Profesi (BNSP)", "2025", "Manajemen SDM", C_AMBER),
    ("Culture & People Experience", "PT. Kimia Farma Apotek", "2024", "Creative Media", C_EMERALD),
    ("Pelatihan Bahasa Inggris (CPMI)", "Universitas Binawan (Jakarta)", "2026", "Bahasa Inggris CPMI", C_CYAN),
    ("Media, Humas & Event", "BKKBN, Depok 10K & Samahita", "2018-2021", "Humas & Media", C_LIME),
]

for idx, (c_title, c_iss, c_yr, c_cat, col) in enumerate(certs):
    row, col_idx = divmod(idx, 4)
    x = Inches(0.6 + col_idx * 3.05)
    y = Inches(1.5 + row * 2.7)
    add_card(s13, x, y, Inches(2.9), Inches(2.5))
    tb = s13.shapes.add_textbox(x + Inches(0.15), y + Inches(0.15), Inches(2.6), Inches(2.2))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = f"🎖️  {c_cat}"
    p.font.size = Pt(9.5)
    p.font.bold = True
    p.font.color.rgb = col
    p2 = tf.add_paragraph()
    p2.text = c_title
    p2.font.size = Pt(12)
    p2.font.bold = True
    p2.font.color.rgb = C_WHITE
    p3 = tf.add_paragraph()
    p3.text = f"\nPenerbit: {c_iss}\nTahun: {c_yr}"
    p3.font.size = Pt(9.5)
    p3.font.color.rgb = C_MUTED

add_footer(s13, "LISENSI & SERTIFIKASI PROFESI")

# ==========================================
# SLIDE 14: CLOSING & CONTACT
# ==========================================
s14 = prs.slides.add_slide(blank_layout)
set_slide_background(s14)
add_header(s14, "KONTAK & KOLABORASI • GET IN TOUCH", "Mari Membangun Sinergi &", "Prestasi Bersama", "14 / 14")

# Left Value Prop & Channels
add_card(s14, Inches(0.6), Inches(1.5), Inches(7.5), Inches(5.3))
tb_cl = s14.shapes.add_textbox(Inches(0.9), Inches(1.7), Inches(7.0), Inches(5.0))
tf = tb_cl.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = '"Siap menghadirkan ketelitian teknis pengelasan & QC manufaktur, integritas operasional, serta daya dorong kepemimpinan komersial untuk kemajuan perusahaan Anda."'
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = C_LIME
p2 = tf.add_paragraph()
p2.text = "\nTerbuka untuk posisi Welder 3G GMAW/SMAW, Quality Control (QC) Inspector, Store Leader / Retail Operations Supervisor, serta peran strategis lainnya di industri manufaktur, pertambangan, fabrikasi, konstruksi, dan retail modern di seluruh Indonesia.\n"
p2.font.size = Pt(11)
p2.font.color.rgb = C_LIGHT

contacts = [
    ("✉️ Email Resmi", data['profile']['email']),
    ("📱 WhatsApp / Telepon", data['profile']['phone']),
    ("💼 LinkedIn Profil", "linkedin.com/in/muhamad-rivai-985662290"),
    ("📍 Domisili & Penempatan", f"{data['profile']['location']} (Siap Penempatan)")
]
for c_lbl, c_val in contacts:
    pc = tf.add_paragraph()
    r1 = pc.add_run()
    r1.text = f"• {c_lbl}: "
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = C_CYAN
    r2 = pc.add_run()
    r2.text = c_val
    r2.font.size = Pt(11)
    r2.font.color.rgb = C_WHITE

# Right Card & Photo
add_card(s14, Inches(8.4), Inches(1.5), Inches(4.3), Inches(5.3), C_CARD, C_LIME)
c_img = get_img("Foto-Profile-1")
if c_img:
    s14.shapes.add_picture(c_img, Inches(9.25), Inches(1.8), Inches(2.6), Inches(2.6))
tb_cr = s14.shapes.add_textbox(Inches(8.6), Inches(4.6), Inches(3.9), Inches(2.0))
tf = tb_cr.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "MUHAMAD RIVAI"
p.font.size = Pt(18)
p.font.bold = True
p.font.color.rgb = C_WHITE
p.alignment = PP_ALIGN.CENTER
p2 = tf.add_paragraph()
p2.text = "Welder 3G • Quality Control • Store Leader\nS1 DKV • BNSP Certified • AWS Standards"
p2.font.size = Pt(10.5)
p2.font.color.rgb = C_LIME
p2.alignment = PP_ALIGN.CENTER
p3 = tf.add_paragraph()
p3.text = f"\nHUBUNGI: {data['profile']['phone']}"
p3.font.size = Pt(12)
p3.font.bold = True
p3.font.color.rgb = C_WHITE
p3.alignment = PP_ALIGN.CENTER

add_footer(s14, "TERIMA KASIH • CLOSING & CONTACT")

# Save Presentation
prs.save(PPTX_OUTPUT)
print(f"SUCCESS: Generated PowerPoint presentation at {PPTX_OUTPUT} ({os.path.getsize(PPTX_OUTPUT)} bytes)")

