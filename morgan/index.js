const express = require('express');
const morgan = require('morgan');

const app = express();
morgan.token('host', function(req, res) {
    return req.hostname;
});

app.use(morgan('tiny'));
app.listen(3000, () => {
    console.debug('App listening on :3000');
});

