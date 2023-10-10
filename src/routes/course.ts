
import express from "express";
import { PrismaClient } from "@prisma/client";
import { Course } from "../models/course";

const prisma = new PrismaClient();

const courseRouter = express.Router();

courseRouter
  .get('/:courseId', async (req, res) => {
    try {
      const course = await prisma.course.findUnique({
        where: {
          id: parseInt(req.params.courseId),
        },
      });
      if (course != null) {
        res.send( new Course(course));
      }
      else {
        res.send("Unable to find course for given ID. Please check ID and try again.");
      }
    } catch (error) {
      console.error('Error retrieving course:', error);
      res.send('Error retrieving course.')
    }
    
  });

courseRouter
  .post('', async (req, res) => {
    try {
      const course = await prisma.course.create({
        data: {
          name: req.body.name, 
          streetAddress: req.body.streetAddress, 
          city: req.body.city, 
          state: req.body.state, 
          zip:  req.body.zip
        }
      });
      res.send(new Course(course));
    } catch (error) {
      console.error('Error adding course:', error);
      res.send('Error adding course.')
    }
  });

courseRouter
  .delete('/:courseId', async (req, res) => {
    try {
      const deletedCourse = await prisma.course.delete({
        where: {
          id: parseInt(req.params.courseId),
        },
      });
      console.log('Deleted course:', deletedCourse);
      res.send('Successfully deleted course');
    } catch (error) {
      console.error('Error deleting course:', error);
      res.send('Error deleting course.')
    } 
  });

export default courseRouter;