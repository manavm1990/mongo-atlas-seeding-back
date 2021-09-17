import Router from "express";
import dataController from "./controller.js";

const router = new Router();

router.get("/seed", (_, res) => {
  try {
    res.json(dataController.init());
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
