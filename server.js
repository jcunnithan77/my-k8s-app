const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>Hello from Jithin's Ubuntu Server!</h1>
        <p><b>Status:</b> Deployment Successful via GitHub Actions</p>
        <p><b>Pod Name:</b> ${os.hostname()}</p>
        <p><b>Location:</b> Riyadh, KSA</p>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});