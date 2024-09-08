import express from 'express';
import { join } from 'node:path';
import { parentPort } from 'node:worker_threads';

const PORT = 8080;
const APP_DIST = join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'example',
    'com.github.dfenerski.ui5_universal.example',
    'dist',
);
// Spin up local express server to serve the build files
console.error(`Serving static files from ${APP_DIST}`);
const server = express();
server.use(express.static(APP_DIST));
//
const nodeServer = server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Fallback for SPA
server.get('*', (req, res) => {
    console.log(`Request: ${req.url}`);
    res.send('Hello World!');
});

// Gracefully handle termination
parentPort?.on('message', message => {
    if (message === 'terminate') {
        console.log('Shutting down server...');
        nodeServer.close();
        process.exit(0);
    }
});
