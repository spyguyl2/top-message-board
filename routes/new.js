import { Router } from "express";
import newController from "../controllers/newController.js";

const newRouter = Router();

newRouter.get("/", newController.get);
newRouter.post("/", newController.post);

export default newRouter;
