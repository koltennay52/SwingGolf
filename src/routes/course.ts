
import express from "express";
const courseRouter = express.Router();

courseRouter
  .route("/course")
  .get((req, res) => {
    res.send("hello from get course");
  })
  .post((req, res) => {
    res.send("hello from poset course");
  });

export default courseRouter;