const fs = require('fs');
const path = require('path');

const [type, name] = process.argv.slice(2);

if (!name) {
  console.error('Please provide a name.');
  process.exit(1);
}

const baseDir = path.join(__dirname, '..', 'src', 'renderer', 'app', type === 'page' ? 'pages' : 'components', name);
const tsxFileName = `${name}.tsx`;
const scssFileName = `${name}.scss`;

if (fs.existsSync(baseDir)) {
  console.error(`The ${type} "${name}" already exists.`);
  process.exit(1);
}

// Create directory
fs.mkdirSync(baseDir, { recursive: true });

// Create .tsx file
fs.writeFileSync(
  path.join(baseDir, tsxFileName),
  `import React from 'react';\nimport './${scssFileName}';\n\nconst ${name} = () => {\n  return <div className="${name}">${name} Component</div>;\n};\n\nexport default ${name};\n`
);

// Create .scss file
fs.writeFileSync(
  path.join(baseDir, scssFileName),
  `.${name} {\n  // Your styles here\n}\n`
);

// If a page is created, update index.tsx with import and route
if (type === 'page') {
  const indexPath = path.join(__dirname, '..', 'src', 'renderer', 'index.tsx');
  
  // Read the index.tsx file
  let indexFileContent = fs.readFileSync(indexPath, 'utf-8');

  // Create import statement
  const importStatement = `import ${name} from './app/pages/${name}/${name}';\n`;

  // Add import statement to the top of the file (after other imports)
  const importInsertPosition = indexFileContent.indexOf('import') !== -1 ? indexFileContent.lastIndexOf('import') : 0;
  indexFileContent = indexFileContent.slice(0, importInsertPosition) + importStatement + indexFileContent.slice(importInsertPosition);

  // Add route to the Routes component
  const route = `\n      <Route path="/${name.toLowerCase()}" element={<${name} />} />`;
  const routeInsertPosition = indexFileContent.indexOf('</Routes>');
  indexFileContent = indexFileContent.slice(0, routeInsertPosition) + route + indexFileContent.slice(routeInsertPosition);

  // Write the updated content back to index.tsx
  fs.writeFileSync(indexPath, indexFileContent);

  console.log(`Successfully updated index.tsx with ${name} route.`);
}

console.log(`Successfully created ${type} "${name}" in ${baseDir}`);
