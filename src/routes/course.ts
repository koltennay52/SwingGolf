
import express from "express";
import { PrismaClient } from "@prisma/client";
import { CourseRequest } from "../requestModels/course";
import { Course } from "../models/course";

const prisma = new PrismaClient();

const courseRouter = express.Router();

courseRouter
  .route("/course")
  .get(async (req, res) => {
    const course = await prisma.course.findUnique({
      where: {
        id: 1,
      },
    });
    
    if (course != null) {
      let courseResponse = new Course(course);
      res.send(courseResponse);
    }
    else {
      res.send("Unable to find course for given ID");
    }
  })
  .post(async (req : CourseRequest, res) => {
    const course = await prisma.course.create({
      data: {
        name: req.name, 
        streetAddress: req.streetAddress, 
        city: req.city, 
        state: req.state, 
        zip:  req.zip
      }
    });
    res.send(course);
  });

export default courseRouter;