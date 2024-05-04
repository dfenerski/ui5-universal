import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../../app/dist')));

// Fallback for SPA
app.get('*', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
