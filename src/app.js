"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_1 = __importDefault(require("./routes/course"));
const body_parser_1 = __importDefault(require("body-parser"));
require("utils.ts");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use("/", course_1.default);
app.get("/", (req, res) => {
    res.send("PING SWING GOLF");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
