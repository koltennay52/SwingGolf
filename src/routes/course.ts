
import express from "express";
import { PrismaClient } from "@prisma/client";
import { CourseRequest } from "../models/course";

const prisma = new PrismaClient();

const courseRouter = express.Router();

courseRouter
  .route("/course")
  .get(async (req, res) => {
    const course = await prisma.course.findUnique({
      where: {
        id: 1,
      },
    })
    res.send(
      course
    );
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