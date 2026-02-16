#!/bin/bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_BASE="$PROJECT_ROOT/public/תמונונת סטילס"
OUT_BASE="$PROJECT_ROOT/public/gallery"
TMP_DIR=$(mktemp -d)

trap "rm -rf $TMP_DIR" EXIT

echo "=== Dental Care Image Optimizer ==="
echo "Source: $SRC_BASE ($(du -sh "$SRC_BASE" | cut -f1))"
echo ""

# 1. Clean macOS metadata from source
find "$SRC_BASE" -name '._*' -delete 2>/dev/null || true
find "$SRC_BASE" -name '.DS_Store' -delete 2>/dev/null || true
echo "[OK] Cleaned macOS metadata"

# 2. Create output directories
rm -rf "$OUT_BASE"
mkdir -p "$OUT_BASE/team" "$OUT_BASE/treatments" "$OUT_BASE/smiles"

# ============================================
# TEAM PHOTOS (portrait, alpha channel PNGs)
# ============================================
echo ""
echo "--- Processing Team Photos ---"
counter=1
for src in "$SRC_BASE/צוות"/*.png; do
    [ -f "$src" ] || continue
    filename=$(basename "$src")
    echo "  [$counter] $filename"

    # Resize to 800px wide
    cp "$src" "$TMP_DIR/$filename"
    sips --resampleWidth 800 "$TMP_DIR/$filename" --out "$TMP_DIR/resized-$filename" >/dev/null 2>&1

    # Full size WebP (preserve alpha)
    cwebp -q 80 -alpha_q 90 "$TMP_DIR/resized-$filename" \
        -o "$OUT_BASE/team/doctor-${counter}.webp" 2>/dev/null

    # 400px thumbnail
    sips --resampleWidth 400 "$TMP_DIR/$filename" --out "$TMP_DIR/thumb-$filename" >/dev/null 2>&1
    cwebp -q 75 -alpha_q 85 "$TMP_DIR/thumb-$filename" \
        -o "$OUT_BASE/team/doctor-${counter}-thumb.webp" 2>/dev/null

    counter=$((counter + 1))
done
echo "[OK] Team: $((counter - 1)) images processed"

# ============================================
# TREATMENT PHOTOS (landscape JPGs)
# ============================================
echo ""
echo "--- Processing Treatment Photos ---"
counter=1
for src in "$SRC_BASE/תמונות מטיפולים"/DSC*.JPG "$SRC_BASE/תמונות מטיפולים"/DSC*.jpg; do
    [ -f "$src" ] || continue
    filename=$(basename "$src")
    padded=$(printf '%02d' $counter)
    echo "  [$padded] $filename"

    # Resize to 1200px wide
    cp "$src" "$TMP_DIR/$filename"
    sips --resampleWidth 1200 "$TMP_DIR/$filename" --out "$TMP_DIR/resized-$filename" >/dev/null 2>&1

    # Full size WebP
    cwebp -q 80 -preset photo "$TMP_DIR/resized-$filename" \
        -o "$OUT_BASE/treatments/treatment-${padded}.webp" 2>/dev/null

    # 400px thumbnail
    sips --resampleWidth 400 "$TMP_DIR/$filename" --out "$TMP_DIR/thumb-$filename" >/dev/null 2>&1
    cwebp -q 75 -preset photo "$TMP_DIR/thumb-$filename" \
        -o "$OUT_BASE/treatments/treatment-${padded}-thumb.webp" 2>/dev/null

    # Clean temp
    rm -f "$TMP_DIR/$filename" "$TMP_DIR/resized-$filename" "$TMP_DIR/thumb-$filename"
    counter=$((counter + 1))
done
echo "[OK] Treatments: $((counter - 1)) images processed"

# ============================================
# SMILE PHOTOS (deduplicate JPG/PNG pairs)
# ============================================
echo ""
echo "--- Processing Smile Photos ---"
counter=1

# First: numbered files (1-10.JPG) - these are the best smile closeups
for i in $(seq 1 10); do
    src="$SRC_BASE/תמונות שיניים אחות הרופא/${i}.JPG"
    [ -f "$src" ] || continue
    padded=$(printf '%02d' $counter)
    echo "  [$padded] ${i}.JPG"

    cp "$src" "$TMP_DIR/smile-${i}.jpg"
    sips --resampleWidth 1200 "$TMP_DIR/smile-${i}.jpg" --out "$TMP_DIR/resized-smile-${i}.jpg" >/dev/null 2>&1

    cwebp -q 80 -preset photo "$TMP_DIR/resized-smile-${i}.jpg" \
        -o "$OUT_BASE/smiles/smile-${padded}.webp" 2>/dev/null

    sips --resampleWidth 400 "$TMP_DIR/smile-${i}.jpg" --out "$TMP_DIR/thumb-smile-${i}.jpg" >/dev/null 2>&1
    cwebp -q 75 -preset photo "$TMP_DIR/thumb-smile-${i}.jpg" \
        -o "$OUT_BASE/smiles/smile-${padded}-thumb.webp" 2>/dev/null

    rm -f "$TMP_DIR/smile-${i}.jpg" "$TMP_DIR/resized-smile-${i}.jpg" "$TMP_DIR/thumb-smile-${i}.jpg"
    counter=$((counter + 1))
done

# Then: DSC* JPG files (skip PNG duplicates, skip if already in treatments)
for src in "$SRC_BASE/תמונות שיניים אחות הרופא"/DSC*.JPG; do
    [ -f "$src" ] || continue
    base=$(basename "$src" .JPG)

    # Skip duplicates that exist in treatments folder
    if [ -f "$SRC_BASE/תמונות מטיפולים/${base}.JPG" ]; then
        echo "  [skip] $base (duplicate in treatments)"
        continue
    fi

    padded=$(printf '%02d' $counter)
    echo "  [$padded] ${base}.JPG"

    cp "$src" "$TMP_DIR/${base}.jpg"
    sips --resampleWidth 1200 "$TMP_DIR/${base}.jpg" --out "$TMP_DIR/resized-${base}.jpg" >/dev/null 2>&1

    cwebp -q 80 -preset photo "$TMP_DIR/resized-${base}.jpg" \
        -o "$OUT_BASE/smiles/smile-${padded}.webp" 2>/dev/null

    sips --resampleWidth 400 "$TMP_DIR/${base}.jpg" --out "$TMP_DIR/thumb-${base}.jpg" >/dev/null 2>&1
    cwebp -q 75 -preset photo "$TMP_DIR/thumb-${base}.jpg" \
        -o "$OUT_BASE/smiles/smile-${padded}-thumb.webp" 2>/dev/null

    rm -f "$TMP_DIR/${base}.jpg" "$TMP_DIR/resized-${base}.jpg" "$TMP_DIR/thumb-${base}.jpg"
    counter=$((counter + 1))
done
echo "[OK] Smiles: $((counter - 1)) images processed"

# ============================================
# REPORT
# ============================================
echo ""
echo "========================================="
echo "          OPTIMIZATION COMPLETE"
echo "========================================="
echo ""
echo "Team photos:      $(ls "$OUT_BASE/team"/*.webp 2>/dev/null | grep -cv thumb) images"
echo "Treatment photos:  $(ls "$OUT_BASE/treatments"/*.webp 2>/dev/null | grep -cv thumb) images"
echo "Smile photos:      $(ls "$OUT_BASE/smiles"/*.webp 2>/dev/null | grep -cv thumb) images"
echo ""
echo "Total gallery size: $(du -sh "$OUT_BASE" | cut -f1)"
echo ""
du -sh "$OUT_BASE/team" "$OUT_BASE/treatments" "$OUT_BASE/smiles"
echo ""
echo "Original source:    $(du -sh "$SRC_BASE" | cut -f1)"
echo "========================================="
