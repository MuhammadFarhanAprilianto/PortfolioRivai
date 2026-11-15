"""
Master Script: Generate Portfolio Presentation (PDF & PPTX)
Author: Muhamad Rivai Portfolio Automation
Description:
  Generates both 'Portofolio - Muhamad Rivai.pdf' and 'Portofolio - Muhamad Rivai.pptx'
  directly from 'public/data/portfolio-data.json' and 'public/assets/'.
"""

import os
import json
import re
import subprocess
import time
from PIL import Image
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "public", "data", "portfolio-data.json")
ASSETS_DIR = os.path.join(BASE_DIR, "public", "assets")
OPT_ASSETS_DIR = os.path.join(BASE_DIR, "public", "assets", "optimized")
HTML_OUTPUT = os.path.join(BASE_DIR, "presentation_deck.html")
PDF_OUTPUT = os.path.join(BASE_DIR, "Portofolio - Muhamad Rivai.pdf")
PPTX_OUTPUT = os.path.join(BASE_DIR, "Portofolio - Muhamad Rivai.pptx")
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

def ensure_optimized_assets():
    os.makedirs(OPT_ASSETS_DIR, exist_ok=True)
    for f in os.listdir(ASSETS_DIR):
        if f.endswith(".md") or f == "optimized":
            continue
        p = os.path.join(ASSETS_DIR, f)
        if os.path.isfile(p):
            out_name = os.path.splitext(f)[0] + ".jpg"
            out_path = os.path.join(OPT_ASSETS_DIR, out_name)
            if not os.path.exists(out_path):
                im = Image.open(p)
                if im.mode in ("RGBA", "P"):
                    im = im.convert("RGB")
                im.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
                im.save(out_path, "JPEG", quality=88, optimize=True)

if __name__ == "__main__":
    ensure_optimized_assets()
    print("Assets verified in:", OPT_ASSETS_DIR)
    print("PDF output:", PDF_OUTPUT)
    print("PPTX output:", PPTX_OUTPUT)

