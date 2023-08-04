"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_1 = __importDefault(require("./routes/course"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use("/course", course_1.default);
app.get("/", (req, res) => {
    res.send("PING SWING GOLF");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
