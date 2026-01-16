import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cssPath = join(__dirname, '../src/pages/css/maleneaf.css');
const outputPath = join(__dirname, '../src/components/baseStyles.ts');

try {
  const cssContent = readFileSync(cssPath, 'utf-8');
  const tsContent = `
      import { css, unsafeCSS } from 'lit';

      const cssContent = \`${cssContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

      export const baseStyles = css\`\${unsafeCSS(cssContent)}\`;
  `

  writeFileSync(outputPath, tsContent, 'utf-8');
  console.log('Generated baseStyles.ts');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}