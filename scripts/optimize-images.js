const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeFolder(dirPath, maxWidth = 1200) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await optimizeFolder(fullPath, maxWidth);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') continue;

    const baseName = path.basename(entry.name, ext);
    const webpPath = path.join(dirPath, `${baseName}.webp`);
    const stat = fs.statSync(fullPath);

    console.log(`Processing: ${entry.name} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

    try {
      const isHero = entry.name.toLowerCase().includes('hero');
      const targetWidth = isHero ? 1920 : maxWidth;

      // 1. Generate WebP
      await sharp(fullPath)
        .resize(targetWidth, null, { withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath + '.tmp');

      if (fs.existsSync(webpPath)) fs.unlinkSync(webpPath);
      fs.renameSync(webpPath + '.tmp', webpPath);
      const webpStat = fs.statSync(webpPath);
      console.log(`  -> WebP: ${(webpStat.size / 1024).toFixed(1)} KB`);

      // 2. If source file is huge (> 500KB), optimize in-place as well
      if (stat.size > 500 * 1024) {
        const tmpPath = fullPath + '.opt.tmp';
        if (ext === '.png') {
          await sharp(fullPath)
            .resize(targetWidth, null, { withoutEnlargement: true })
            .png({ compressionLevel: 9, quality: 80 })
            .toFile(tmpPath);
        } else {
          await sharp(fullPath)
            .resize(targetWidth, null, { withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(tmpPath);
        }

        const optStat = fs.statSync(tmpPath);
        if (optStat.size < stat.size) {
          fs.unlinkSync(fullPath);
          fs.renameSync(tmpPath, fullPath);
          console.log(`  -> Source optimized: ${(optStat.size / 1024).toFixed(1)} KB`);
        } else {
          fs.unlinkSync(tmpPath);
        }
      }
    } catch (err) {
      console.error(`Error processing ${entry.name}:`, err.message);
    }
  }
}

async function main() {
  console.log('--- Optimizing public/services ---');
  await optimizeFolder(path.join(__dirname, '..', 'public', 'services'), 1200);

  console.log('\n--- Optimizing public/blog-section ---');
  await optimizeFolder(path.join(__dirname, '..', 'public', 'blog-section'), 1200);

  console.log('\n--- Optimizing public/blog ---');
  await optimizeFolder(path.join(__dirname, '..', 'public', 'blog'), 1200);

  console.log('\nAll images optimized successfully!');
}

main().catch(console.error);
