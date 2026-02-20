#!/usr/bin/env node
'use strict';

/**
 * generate-gallery.js
 *
 * Scans public/vfx/gallery/ and public/photography/ for .webp files,
 * then writes src/data/gallery-images.ts with typed arrays ready for
 * use in LightboxGallery components.
 *
 * Usage:
 *   node scripts/generate-gallery.js
 *   npm run generate-gallery
 */

const fs   = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────────────────────

const ROOT        = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT, 'src', 'data', 'gallery-images.ts');

const VFX_BASE   = path.join(ROOT, 'public', 'vfx', 'gallery');
const PHOTO_BASE = path.join(ROOT, 'public', 'photography');

/**
 * VFX category config.
 * dirName  — the subdirectory name under public/vfx/gallery/
 * label    — display name used as the category value in the output
 * idPrefix — prefix for generated image IDs
 */
const VFX_CATS = [
  { dirName: '3d',         label: '3D',           idPrefix: 'vfx-3d'  },
  { dirName: 'additional', label: 'Additional',    idPrefix: 'vfx-add' },
  { dirName: 'drawings',   label: 'Drawings',      idPrefix: 'vfx-drw' },
];

/**
 * Photography category config.
 * dirName  — the subdirectory name under public/photography/
 * label    — display name used as the category value in the output
 * idPrefix — prefix for generated image IDs
 */
const PHOTO_CATS = [
  { dirName: 'commute',      label: 'Commute',      idPrefix: 'ph-com' },
  { dirName: 'me',           label: 'Me',           idPrefix: 'ph-me'  },
  { dirName: 'neighborhood', label: 'Neighborhood', idPrefix: 'ph-nbr' },
  { dirName: 'protests',     label: 'Protests',     idPrefix: 'ph-prt' },
  { dirName: 'school',       label: 'School',       idPrefix: 'ph-sch' },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Convert a filename stem into a readable alt string.
 * e.g. "hero-shot_01" → "Hero Shot 01"
 */
function stemToAlt(stem) {
  return stem
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Zero-pad a number to 3 digits. */
function pad3(n) {
  return String(n).padStart(3, '0');
}

/**
 * Scan a directory for .webp files, sorted alphabetically.
 * Returns [] and prints a warning if the directory does not exist.
 */
function scanDir(absDir) {
  if (!fs.existsSync(absDir)) {
    console.warn(`  [warn] Directory not found, skipping: ${absDir}`);
    return [];
  }
  try {
    return fs
      .readdirSync(absDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.webp'))
      .map((entry) => entry.name)
      .sort();
  } catch (err) {
    console.error(`  [error] Could not read ${absDir}: ${err.message}`);
    return [];
  }
}

/**
 * Build an array of image objects for a set of category configs.
 *
 * @param {typeof VFX_CATS}  cats       - Category config array
 * @param {string}           publicBase - Absolute path to the base directory
 * @param {string}           webBase    - Web path prefix (e.g. '/vfx/gallery')
 * @returns {object[]}
 */
function buildImages(cats, publicBase, webBase) {
  const images = [];

  for (const { dirName, label, idPrefix } of cats) {
    const absDir = path.join(publicBase, dirName);
    const files  = scanDir(absDir);

    const count = files.length;
    console.log(`  ${label.padEnd(14)} ${count} image${count !== 1 ? 's' : ''}`);

    files.forEach((filename, i) => {
      const stem = path.parse(filename).name;

      // Web paths always use forward slashes regardless of OS.
      // path.join would use backslashes on Windows, so we build manually.
      const src = `${webBase}/${dirName}/${filename}`;

      images.push({
        id:       `${idPrefix}-${pad3(i + 1)}`,
        src,
        alt:      stemToAlt(stem),
        category: label,
      });
    });
  }

  return images;
}

// ── TypeScript code generation ────────────────────────────────────────────────

/** Serialise a single image object as a one-line TypeScript object literal. */
function imgLine(img) {
  const q = JSON.stringify; // shorthand
  return (
    `  { id: ${q(img.id)}, src: ${q(img.src)}, ` +
    `alt: ${q(img.alt)}, category: ${q(img.category)} },`
  );
}

/**
 * Build the full export const block for one image array.
 * Entries are grouped by category with a comment separator.
 */
function arrayBlock(varName, images, catDefs) {
  if (images.length === 0) {
    return `export const ${varName}: GalleryImage[] = [];\n`;
  }

  const lines = [`export const ${varName}: GalleryImage[] = [`];

  for (const { label } of catDefs) {
    const group = images.filter((img) => img.category === label);
    if (group.length === 0) continue;

    const divider = '─'.repeat(Math.max(1, 56 - label.length));
    lines.push(`  // ── ${label} ${divider}`);

    for (const img of group) {
      lines.push(imgLine(img));
    }
  }

  lines.push('];\n');
  return lines.join('\n');
}

/** Build a `as const` category array literal for the given labels. */
function catConst(varName, labels) {
  return `export const ${varName} = ${JSON.stringify(['All', ...labels])} as const;\n`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const HR = '─'.repeat(56);
  console.log(`\ngenerate-gallery.js\n${HR}`);

  // ── Scan directories ──────────────────────────────────────────
  console.log('\nScanning VFX gallery...');
  const vfxImages = buildImages(VFX_CATS, VFX_BASE, '/vfx/gallery');

  console.log('\nScanning Photography gallery...');
  const photoImages = buildImages(PHOTO_CATS, PHOTO_BASE, '/photography');

  // ── Summary ───────────────────────────────────────────────────
  const totalVfx   = vfxImages.length;
  const totalPhoto = photoImages.length;
  console.log(`\n${HR}`);
  console.log(`VFX images        : ${totalVfx}`);
  console.log(`Photography images: ${totalPhoto}`);
  console.log(`Total             : ${totalVfx + totalPhoto}`);

  // ── Derive category label lists (config order, non-empty only) ─
  const vfxCatLabels = VFX_CATS
    .filter((c) => vfxImages.some((img) => img.category === c.label))
    .map((c) => c.label);

  const photoCatLabels = PHOTO_CATS
    .filter((c) => photoImages.some((img) => img.category === c.label))
    .map((c) => c.label);

  // ── Build output ──────────────────────────────────────────────
  const sections = [
    `// Auto-generated by scripts/generate-gallery.js - Do not edit manually`,
    `// Run: node scripts/generate-gallery.js`,
    `// Generated: ${new Date().toISOString()}`,
    `// VFX: ${totalVfx} images  |  Photography: ${totalPhoto} images`,
    ``,
    `// ─────────────────────────────────────────────────────────────`,
    `// Shared interface`,
    `// ─────────────────────────────────────────────────────────────`,
    ``,
    `export interface GalleryImage {`,
    `  id: string;`,
    `  src: string;`,
    `  alt: string;`,
    `  category: string;`,
    `}`,
    ``,
    `// ─────────────────────────────────────────────────────────────`,
    `// VFX Gallery`,
    `// Source: public/vfx/gallery/[category]/*.webp`,
    `// ─────────────────────────────────────────────────────────────`,
    ``,
    arrayBlock('vfxGallery', vfxImages, VFX_CATS),
    `// ─────────────────────────────────────────────────────────────`,
    `// Photography Gallery`,
    `// Source: public/photography/[category]/*.webp`,
    `// ─────────────────────────────────────────────────────────────`,
    ``,
    arrayBlock('photographyGallery', photoImages, PHOTO_CATS),
    `// ─────────────────────────────────────────────────────────────`,
    `// Category lists for filter UI  ('All' is always first)`,
    `// ─────────────────────────────────────────────────────────────`,
    ``,
    catConst('vfxGalleryCategories', vfxCatLabels),
    catConst('photographyCategories', photoCatLabels),
    `// Combined`,
    `export const allGalleryImages: GalleryImage[] = [...vfxGallery, ...photographyGallery];`,
    ``,
  ];

  const output = sections.join('\n');

  // ── Write file ────────────────────────────────────────────────
  const outDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
    console.log(`\nCreated directory: ${outDir}`);
  }

  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
  console.log(`\nWrote: ${OUTPUT_FILE}`);
  console.log('Done.\n');
}

main();
