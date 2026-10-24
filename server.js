// Local Development Server for Ashutosh Mishra Portfolio
// Serves static assets and provides local mock for Twilio contact function

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ASSETS_DIR = path.join(__dirname, 'assets');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // Handle local mock of contact function
  if (req.method === 'POST' && (req.url === '/api/contact' || req.url === '/contact')) {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('[Contact Form Received]:', data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Inquiry received locally! Email notification simulated to primeliquidpvt.lmt@gmail.com.',
          timestamp: new Date().toISOString()
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON body' }));
      }
    });
    return;
  }

  // Sanitize path and strip leading /assets/ if present
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl.startsWith('/assets/')) {
    cleanUrl = cleanUrl.replace(/^\/assets\//, '/');
  }
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  }

  const filePath = path.join(ASSETS_DIR, cleanUrl);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(`404 Not Found: ${cleanUrl}`);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`⚡ Ashutosh Mishra Portfolio running locally!`);
  console.log(`👉 Access URL: http://localhost:${PORT}`);
  console.log(`📱 QR Codes Ready: http://localhost:${PORT}/qr-code.svg`);
  console.log(`=======================================================`);
});
