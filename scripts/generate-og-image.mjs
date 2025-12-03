import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a"/>
      <stop offset="100%" style="stop-color:#1a1a1a"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b7355"/>
      <stop offset="50%" style="stop-color:#d4af37"/>
      <stop offset="100%" style="stop-color:#8b7355"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Border frame -->
  <rect x="30" y="30" width="1140" height="570" fill="none" stroke="url(#gold)" stroke-width="2"/>
  <rect x="45" y="45" width="1110" height="540" fill="none" stroke="url(#gold)" stroke-width="1" opacity="0.5"/>

  <!-- Corner decorations -->
  <text x="50" y="70" fill="#d4af37" font-size="24">◆</text>
  <text x="1130" y="70" fill="#d4af37" font-size="24" text-anchor="end">◆</text>
  <text x="50" y="590" fill="#d4af37" font-size="24">◆</text>
  <text x="1130" y="590" fill="#d4af37" font-size="24" text-anchor="end">◆</text>

  <!-- Top label -->
  <text x="600" y="180" fill="#8b7355" font-family="serif" font-size="28" text-anchor="middle" letter-spacing="8">選 択 型 文 學 遊 戯</text>

  <!-- Main title -->
  <text x="600" y="300" fill="#d4af37" font-family="serif" font-size="120" text-anchor="middle" letter-spacing="30">道化師</text>

  <!-- Subtitle -->
  <text x="600" y="360" fill="#666" font-family="sans-serif" font-size="24" text-anchor="middle" letter-spacing="4">DOUKE SIMULATOR</text>

  <!-- Divider -->
  <line x1="350" y1="400" x2="850" y2="400" stroke="#d4af37" stroke-width="1" opacity="0.5"/>
  <text x="600" y="408" fill="#d4af37" font-size="16" text-anchor="middle">❖</text>

  <!-- Quote -->
  <text x="600" y="470" fill="#a0a0a0" font-family="serif" font-size="26" text-anchor="middle">「どちらを選んでも、救われない。」</text>

  <!-- Author -->
  <text x="600" y="530" fill="#666" font-family="serif" font-size="18" text-anchor="middle">― 太宰治『人間失格』より ―</text>
</svg>
`;

async function generateOgImage() {
  const outputPath = join(__dirname, '..', 'public', 'og-image.png');

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`OGP image generated: ${outputPath}`);
}

generateOgImage().catch(console.error);
