import Router from "express";
import adminController from "./controllers/admin.js";

const router = new Router();

router.post("/admin", async ({ body: { password } }, res) => {
  try {
    res.json(await adminController.show(password));
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
