import express from 'express'
import bodyParser from 'body-parser'
const app = express();
const port = 4201;


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "statusMessage": "SUCCESS"
    })
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
})
