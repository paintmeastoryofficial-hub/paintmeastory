# Textured art for the shop

Drop photos (.jpg, .png, .webp) into this folder and they appear on shop.html automatically.

- File name = title: `golden-bloom.jpg` shows as "Golden Bloom".
- Start names with `01-`, `02-`… to set the order (numbers are hidden).
- Optional: add `details.json` here for prices, sizes and sold pieces:

```json
{
  "golden-bloom.jpg": { "price": "₹8,500", "size": "24 × 30 in", "desc": "A short line about the piece." },
  "ocean-whisper.jpg": { "status": "sold" },
  "ivory-waves.jpg": { "featured": true }
}
```

Add `"featured": true` to a piece to show it in the three pictures under "Want something made for your home?" (otherwise the first three are used).

## Tags (up to 5 per painting)

Edit `tags.txt` in this folder — one painting per line, using its number:

```
29: hearts, love, minimal, gift, small
```

Tags show under each painting, in the shop's index (click to filter) and in search.
