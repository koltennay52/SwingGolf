"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const course_1 = require("../models/course");
const prisma = new client_1.PrismaClient();
const courseRouter = express_1.default.Router();
courseRouter
    .route("/course")
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield prisma.course.findUnique({
        where: {
            id: 1,
        },
    });
    if (course != null) {
        let courseResponse = new course_1.Course(course);
        res.send(courseResponse);
    }
    else {
        res.send("Unable to find course for given ID");
    }
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield prisma.course.create({
        data: {
            name: req.name,
            streetAddress: req.streetAddress,
            city: req.city,
            state: req.state,
            zip: req.zip
        }
    });
    res.send(course);
}));
exports.default = courseRouter;
