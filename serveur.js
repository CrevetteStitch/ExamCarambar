const express = require('express');
const router = require('./routes/routes');
const app = express();
const port = process.env.PORT || 3000;
const version = 'v1';
const db = require('./db/database');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/${version}`, router);

db.sync().then(() => {
    console.log('La base de données est synchronisée');
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});
