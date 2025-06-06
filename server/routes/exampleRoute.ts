import { Router } from "express";
import { getExample, postExample } from "../controllers/exampleController";
import validate from "../middleware/validate";
import { exampleSchema } from "../schemas/exampleSchema";

const router = Router();

router.get('/', getExample);
router.post('/', validate(exampleSchema), postExample);

export default router;