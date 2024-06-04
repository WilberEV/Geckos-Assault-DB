import express from "express";
import { createEnemy, findEnemy } from "./controler.js";
const enemyRouter = express.Router();
//Create Enemy
enemyRouter.post('/', async (req, res, next) => {
    try {
        res.json(await createEnemy(req.body));
    }
    catch (e) {
        next(e);
    }
});
//Find Enemy
enemyRouter.get('/', async (req, res, next) => {
    try {
        res.json(await findEnemy(req.query.ID, req.query.stratum, req.query.type));
    }
    catch (e) {
        next(e);
    }
});
export default enemyRouter;
//# sourceMappingURL=router.js.map