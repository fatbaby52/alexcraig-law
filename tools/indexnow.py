"""Ping IndexNow (Bing/ChatGPT-search index) with every URL in sitemap.xml.

Run after each production deploy:  python tools/indexnow.py
The key file ({key}.txt in the site root) must already be deployed.
"""
import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEY = (ROOT / ".indexnow-key").read_text().strip()

sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
urls = re.findall(r"<loc>(https://alexcraig\.law[^<]*)</loc>", sitemap)

payload = {
    "host": "alexcraig.law",
    "key": KEY,
    "keyLocation": f"https://alexcraig.law/{KEY}.txt",
    "urlList": urls,
}

req = urllib.request.Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload).encode(),
    headers={"Content-Type": "application/json; charset=utf-8"},
)
with urllib.request.urlopen(req) as resp:
    print(f"IndexNow: HTTP {resp.status} for {len(urls)} URLs")
