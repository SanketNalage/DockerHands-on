const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    return res.json({ 
        message: "Hey I'm a Node.js app in a container",
        author: "Sanket Nalage",
        server: "Running",
        port: PORT
    });
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});