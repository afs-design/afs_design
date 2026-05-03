import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import path from 'path';

const db = new Database('database.sqlite');
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,
    email TEXT,
    phone TEXT,
    package TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post('/api/contact', (req, res) => {
    const { name, company, email, phone, package: pkg, description } = req.body;
    try {
      const stmt = db.prepare('INSERT INTO contacts (name, company, email, phone, package, description) VALUES (?, ?, ?, ?, ?, ?)');
      stmt.run(name, company, email, phone, pkg, description);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to save contact' });
    }
  });

  const publicDir = path.resolve(process.cwd(), 'public');
  
  const streamZip = (filename: string, req: express.Request, res: express.Response) => {
    const fs = require('fs');
    const filePath = path.join(publicDir, filename);
    if (!fs.existsSync(filePath)) return res.status(404).end();
    const stat = fs.statSync(filePath);
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', stat.size);
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  };

  app.get('/digital.zip', (req, res) => streamZip('digital.zip', req, res));
  app.get('/file.zip', (req, res) => streamZip('file.zip', req, res));
  app.get('/living.zip', (req, res) => streamZip('living.zip', req, res));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
