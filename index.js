const express = require('express');
const process = require('process');

const app = express();

app.get('/api', (req, res) => {
    res.json({ message: "Hello I'm Jack the API" });
});

app.listen(3000, () => {
    console.log("I'm alive!");
});

process.on('SIGINT', () => {
    console.info("Interrupted");
    process.exit(0);
});