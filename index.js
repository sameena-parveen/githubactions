const express = require('express');
const { sum, multiply } = require('./math');
const app = express();

app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    const result = sum(Number(a), Number(b));
    res.send(`Sum: ${result}`);
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = multiply(Number(a), Number(b));
    res.send(`Product: ${result}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});