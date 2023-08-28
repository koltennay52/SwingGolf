import express from 'express';
import courseRouter  from './routes/course';
import bodyParser from "body-parser";
import env from "dotenv";

env.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/", courseRouter);

app.get("/", (req, res) => {
    res.send("PING SWING GOLF");
});


app.listen(port, () => {
console.log(`Listening on port ${port}`)
})