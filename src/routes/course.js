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
    .get('/:courseId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield prisma.course.findUnique({
            where: {
                id: parseInt(req.params.courseId),
            },
        });
        if (course != null) {
            res.send(new course_1.Course(course));
        }
        else {
            res.send("Unable to find course for given ID. Please check ID and try again.");
        }
    }
    catch (error) {
        console.error('Error retrieving course:', error);
        res.send('Error retrieving course.');
    }
}));
courseRouter
    .post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield prisma.course.create({
            data: {
                name: req.body.name,
                streetAddress: req.body.streetAddress,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            }
        });
        res.send(new course_1.Course(course));
    }
    catch (error) {
        console.error('Error adding course:', error);
        res.send('Error adding course.');
    }
}));
courseRouter
    .delete('/:courseId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCourse = yield prisma.course.delete({
            where: {
                id: parseInt(req.params.courseId),
            },
        });
        console.log('Deleted course:', deletedCourse);
        res.send('Successfully deleted course');
    }
    catch (error) {
        console.error('Error deleting course:', error);
        res.send('Error deleting course.');
    }
}));
exports.default = courseRouter;
