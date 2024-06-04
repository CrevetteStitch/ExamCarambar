const express = require('express');
const router = require('./routes/routes');
const app = express();
const port = process.env.PORT || 3000;
const version = 'v1';
const db = require('./db/database');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Blagues API',
            version: '1.0.0',
            description: 'API pour les blagues',
            contact: {
                name: 'Blagues API',
            },
            url: ['http://localhost:3000'],
        },
    },  
    apis: ['./routes/routes.js'],
};


const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
