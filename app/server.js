import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4321;

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

http
  .createServer((req, res) => {
    const urlPath = req.url.split('?')[0].split('#')[0];
    const filePath = urlPath === '/' ? 'index.html' : urlPath.replace(/^\//, '');
    const fullPath = path.join(__dirname, filePath);

    fs.readFile(fullPath, (err, data) => {
      if (err) {
        fs.readFile(path.join(__dirname, 'index.html'), (err2, data2) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data2);
        });
        return;
      }
      const ext = path.extname(fullPath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log(`Demo app running on http://localhost:${PORT}`));
