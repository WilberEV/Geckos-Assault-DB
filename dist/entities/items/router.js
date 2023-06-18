import express from "express";
import { createItem, findItem } from "./controler.js";
const itemRouter = express.Router();
//Create items
itemRouter.post('/', async (req, res, next) => {
    try {
        res.json(await createItem(req.body));
    }
    catch (e) {
        next(e);
    }
});
//Find items
itemRouter.get('/:name', async (req, res, next) => {
    try {
        res.json(await findItem(req.params.name));
    }
    catch (e) {
        next(e);
    }
});
export default itemRouter;
//# sourceMappingURL=router.js.map