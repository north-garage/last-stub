let express = require('express');
let app = express();
app.disable('x-powered-by');
app.get('/shops', (req, res) => {
    res.json({ hoge: 'fuga' });
};);
app.listen('3000');