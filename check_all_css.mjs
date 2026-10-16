import fs from 'fs';
import path from 'path';

const css = fs.readFileSync('src/index.css', 'utf8');

function getClasses(dir) {
  let classes = new Set();
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    if (f.isDirectory()) {
      for (const c of getClasses(fullPath)) classes.add(c);
    } else if (f.name.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.matchAll(/className=["']([^"']+)["']/g);
      for (const m of matches) {
        m[1].split(/\s+/).forEach(c => {
          if (c && !c.includes('${') && !c.includes('{')) classes.add(c);
        });
      }
    }
  }
  return classes;
}

const allClasses = getClasses('src');
const missing = [];
for (const c of allClasses) {
  const reg = new RegExp('\\.' + c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '(?=[^a-zA-Z0-9_-]|$)', 'i');
  if (!reg.test(css)) {
    missing.push(c);
  }
}
console.log('Total classes in JSX:', allClasses.size);
console.log('Missing classes count:', missing.length);
console.log('Missing classes:', JSON.stringify(missing, null, 2));
