const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

// MIME types para diferentes archivos
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    // Ruta del archivo solicitado
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    // Obtener la extensión del archivo
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Leer y servir el archivo
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Archivo no encontrado - servir index.html para SPA routing
                fs.readFile('./index.html', (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error interno del servidor');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data, 'utf-8');
                    }
                });
            } else {
                // Error del servidor
                res.writeHead(500);
                res.end(`Error del servidor: ${error.code}`);
            }
        } else {
            // Éxito - servir el archivo
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=86400' // Cache por 1 día
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en puerto ${PORT}`);
    console.log(`🌐 Abre http://localhost:${PORT} en tu navegador`);
});
