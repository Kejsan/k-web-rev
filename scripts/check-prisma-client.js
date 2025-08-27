const fs = require('fs');
const path = require('path');

const clientPath = path.join('node_modules', '.prisma', 'client');

if (!fs.existsSync(clientPath)) {
  console.error(`Prisma client not found at ${clientPath}. Run "pnpm prisma generate" before building.`);
  process.exit(1);
}
