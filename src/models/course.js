"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(course) {
        var _a, _b;
        this.name = course.name;
        this.streetAddress = course.streetAddress;
        this.city = course.city;
        this.state = course.state;
        this.zip = (_b = (_a = course.zip) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null;
    }
}
exports.Course = Course;
