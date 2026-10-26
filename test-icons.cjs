const sharp = require('sharp');

// 24x24 standard viewBox for all 5 icons
const svgs = [
  // 1. Facebook: official crisp 'f'
  {
    name: 'fb',
    bg: 'linear-gradient(135deg, #1877f2, #0c63d4)',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
      <defs><linearGradient id="bgFb" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1877f2"/><stop offset="100%" stop-color="#0c63d4"/></linearGradient></defs>
      <circle cx="12" cy="12" r="12" fill="url(#bgFb)"/>
      <path d="M13.5 18v-5.5h1.9l.3-2.2h-2.2V9c0-.6.2-1.1 1.1-1.1h1.2V6c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H9v2.2h1.7V18h2.8z" fill="#ffffff"/>
    </svg>`
  },
  // 2. WhatsApp: official speech bubble + phone
  {
    name: 'wa',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
      <defs><linearGradient id="bgWa" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#25d366"/><stop offset="100%" stop-color="#128c7e"/></linearGradient></defs>
      <circle cx="12" cy="12" r="12" fill="url(#bgWa)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.5c-3.59 0-6.5 2.91-6.5 6.5 0 1.15.3 2.26.87 3.25L5.5 18.5l3.34-.88A6.47 6.47 0 0 0 12 18.5c3.59 0 6.5-2.91 6.5-6.5S15.59 5.5 12 5.5zm0 1.3c2.87 0 5.2 2.33 5.2 5.2 0 2.87-2.33 5.2-5.2 5.2-.93 0-1.82-.25-2.59-.7l-.18-.11-1.93.5.52-1.88-.12-.19A5.17 5.17 0 0 1 6.8 12c0-2.87 2.33-5.2 5.2-5.2zm2.86 7.12c-.15-.08-.93-.46-1.08-.51-.14-.05-.25-.08-.36.08-.1.15-.41.51-.5.62-.09.11-.18.12-.34.04-.15-.08-.66-.25-1.26-.79-.47-.42-.79-.93-.88-1.09-.09-.15-.01-.24.07-.32.07-.07.15-.18.23-.27.08-.09.11-.15.15-.26.05-.1.02-.2-.01-.27-.03-.08-.36-.85-.49-1.16-.13-.31-.26-.27-.36-.27h-.31c-.11 0-.27.04-.41.2-.15.15-.55.54-.55 1.31 0 .77.56 1.51.64 1.62.08.11 1.1 1.68 2.68 2.36.38.16.67.26.9.33.38.12.72.1.99.06.31-.05.93-.38 1.06-.75.14-.37.14-.69.1-.75-.04-.07-.14-.12-.29-.2z" fill="#ffffff"/>
    </svg>`
  },
  // 3. YouTube: official player shape with centered play triangle
  {
    name: 'yt',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
      <defs><linearGradient id="bgYt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff0000"/><stop offset="100%" stop-color="#c90000"/></linearGradient></defs>
      <circle cx="12" cy="12" r="12" fill="url(#bgYt)"/>
      <path d="M17.4 9.4a1.6 1.6 0 0 0-1.1-1.1C15.3 8 12 8 12 8s-3.3 0-4.3.3a1.6 1.6 0 0 0-1.1 1.1C6.3 10.4 6.3 12 6.3 12s0 1.6.3 2.6a1.6 1.6 0 0 0 1.1 1.1c1 .3 4.3.3 4.3.3s3.3 0 4.3-.3a1.6 1.6 0 0 0 1.1-1.1c.3-1 .3-2.6.3-2.6s0-1.6-.3-2.6z" fill="#ffffff"/>
      <polygon points="10.8,10.2 14.2,12 10.8,13.8" fill="#e60000"/>
    </svg>`
  },
  // 4. TikTok: Simple Icons official TikTok glyph
  {
    name: 'tt',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#010101"/>
      <g transform="translate(6, 6) scale(0.5)">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#ffffff"/>
      </g>
    </svg>`
  },
  // 5. Instagram: official modern camera glyph
  {
    name: 'ig',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="bgIg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f09433"/>
          <stop offset="25%" stop-color="#e6683c"/>
          <stop offset="50%" stop-color="#dc2743"/>
          <stop offset="75%" stop-color="#cc2366"/>
          <stop offset="100%" stop-color="#bc1888"/>
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#bgIg)"/>
      <rect x="7" y="7" width="10" height="10" rx="3" ry="3" fill="none" stroke="#ffffff" stroke-width="1.3"/>
      <circle cx="12" cy="12" r="2.5" fill="none" stroke="#ffffff" stroke-width="1.3"/>
      <circle cx="14.9" cy="9.1" r="0.7" fill="#ffffff"/>
    </svg>`
  }
];

async function generate() {
  const compositeItems = [];
  for (let i = 0; i < svgs.length; i++) {
    const buf = await sharp(Buffer.from(svgs[i].svg)).png().toBuffer();
    compositeItems.push({ input: buf, left: i * 56 + 16, top: 16 });
  }
  await sharp({
    create: {
      width: 56 * svgs.length + 20,
      height: 76,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 }
    }
  }).composite(compositeItems).toFile('preview-social-icons.png');
  console.log('preview-social-icons.png updated');
}

generate();
