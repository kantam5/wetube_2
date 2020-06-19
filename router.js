import express from "express";

export const userRouter = express.Router();

// /user 다음의 라우터
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/passward", (req, res) => res.send("user passward"));
