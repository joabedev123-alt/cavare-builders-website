const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'gallery.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/Renovações Completas/g, 'Full Renovations');
content = content.replace(/Cozinhas e Banheiros/g, 'Kitchens & Bathrooms');
content = content.replace(/Exteriores/g, 'Outdoor Spaces');
content = content.replace(/Marcenaria e Interiores/g, 'Custom Millwork');

fs.writeFileSync(filePath, content, 'utf8');
console.log('gallery.ts updated successfully');
