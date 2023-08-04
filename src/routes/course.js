"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseRouter = express_1.default.Router();
courseRouter
    .route("/course")
    .get((req, res) => {
    res.send("hello from get course");
})
    .post((req, res) => {
    res.send("hello from poset course");
});
exports.default = courseRouter;
