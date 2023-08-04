import express from 'express';
import courseRouter  from './routes/course';
import {createClient} from '@supabase/supabase-js';
import bodyParser from "body-parser";
import env from "dotenv";

env.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

app.use("/course", courseRouter);

app.get("/", (req, res) => {
    res.send("PING SWING GOLF");
});

app.listen(port, () => {
console.log(`Listening on port ${port}`)
})