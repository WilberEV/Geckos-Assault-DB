import express from "express";
import { createLocation, findLocation } from "./controler.js";
const locationRouter = express.Router();
//Create Location
locationRouter.post('/', async (req, res, next) => {
    try {
        res.json(await createLocation(req.body));
    }
    catch (e) {
        next(e);
    }
});
//Find Location
locationRouter.get('/', async (req, res, next) => {
    try {
        res.json(await findLocation(req.query.xCoordinate, req.query.yCoordinate));
    }
    catch (e) {
        next(e);
    }
});
export default locationRouter;
//# sourceMappingURL=router.js.map