const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/pages/PackageDetail/packages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Fix template literals in JSX
  let parts = content.split('function buildMapHTML');
  if (parts.length > 1) {
    let before = parts[0];
    let after = parts.slice(1).join('function buildMapHTML');
    
    let lines = before.split('\n');
    lines = lines.map(line => {
      if (line.includes('const backPath =') || line.includes('style={{ backgroundImage:')) {
        return line;
      }
      line = line.replace(/\$\{(PAGE_DETAILS|dayItem|inc|exc)(.*?)\}/g, '{$1$2}');
      return line;
    });
    
    before = lines.join('\n');
    content = before + 'function buildMapHTML' + after;
  }

  // 2. Sunrise Villa: Rename 'Sunrise Villa, Shimla' to 'Sunrise Villa, Shoghi'
  content = content.replace(/["']Sunrise Villa,\s*Shimla["']/g, '"Sunrise Villa, Shoghi"');
  content = content.replace(/desc:\s*["']Sunrise Villa property stay["']/g, 'desc: "Stay at Sunrise Villa property"');
  content = content.replace(/desc:\s*["']Stay at Sunrise Holidays' own property in Shimla\.["']/g, 'desc: "Stay at Sunrise Villa property in Shoghi."');
  content = content.replace(/desc:\s*["']Stay at Sunrise Holidays' own property\.["']/g, 'desc: "Stay at Sunrise Villa property in Shoghi."');
  content = content.replace(/desc:\s*["']Sunrise Travels' own property in Shimla["']/g, 'desc: "Stay at Sunrise Villa property in Shoghi"');

  // 3. Dalhousie Stay: change type to "town", remove "Stay" from name, clean up desc stay reference
  // Regex to match Dalhousie stop patterns:
  content = content.replace(/\{\s*lat:\s*32\.5387,\s*lng:\s*75\.9710,\s*name:\s*["']Dalhousie(?: Stay)?["'],\s*desc:\s*["'](.*?)(?:\s*stay)?["'],\s*type:\s*["']stay["']\s*\}/g, (match, desc) => {
    let cleanDesc = desc.replace(/\s*stay\s*/gi, '').trim();
    if (!cleanDesc) cleanDesc = "Colonial town outer ridge";
    return `{ lat: 32.5387, lng: 75.9710, name: "Dalhousie", desc: "${cleanDesc}", type: "town" }`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
