import express from "express";
import { createChara, findChara, modifyChara, deleteChara } from "./controler.js";
const charaRouter = express.Router();
//Create character
charaRouter.post('/', async (req, res, next) => {
    try {
        res.json(await createChara(req.body));
    }
    catch (e) {
        next(e);
    }
});
//Find Character by User
charaRouter.get('/', async (req, res, next) => {
    try {
        res.json(await findChara(req.query.name, req.query.owner));
    }
    catch (e) {
        next(e);
    }
});
//Find and Update Character by User
charaRouter.put('/', async (req, res, next) => {
    try {
        res.json(await modifyChara(req.body, req.query.name, req.query.owner));
    }
    catch (e) {
        next(e);
    }
});
//Delete Character
charaRouter.delete('/', async (req, res, next) => {
    try {
        res.json(await deleteChara(req.query.name, req.query.owner));
    }
    catch (e) {
        next(e);
    }
});
export default charaRouter;
//# sourceMappingURL=router.js.map