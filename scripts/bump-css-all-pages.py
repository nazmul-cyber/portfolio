"""Remove inline contain styles and bump CSS cache on all portfolio HTML pages."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VERSION = "perf58"
SKIP = {"demo-fixes.html", "live-services-new.html"}

for path in sorted(ROOT.glob("*.html")):
    if path.name in SKIP or "extensions" in str(path):
        continue
    text = path.read_text(encoding="utf-8")
    orig = text
    text = re.sub(r'href="styles\.(?:min\.)?css[^"]*"', f'href="styles.min.css?v={VERSION}"', text)
    text = re.sub(r'\s*<style>\.nav(?:,\.hero)?\{contain:layout style\}</style>\s*', '\n', text)
    text = re.sub(r'\s*<style>\.nav\{contain:layout style\}</style>\s*', '\n', text)
    if text != orig:
        path.write_text(text, encoding="utf-8")
        print("updated", path.name)