import express from 'express';
import courseRouter  from './routes/course';

const app = express();
const port = process.env.PORT || 8000;

app.use("/course", courseRouter);

app.get("/", (req, res) => {
    res.send("PING SWING GOLF");
});

app.listen(port, () => {
console.log(`Listening on port ${port}`)
})