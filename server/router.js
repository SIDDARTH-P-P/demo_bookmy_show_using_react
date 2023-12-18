import { Router } from "express";
import * as fun from "./route_handler.js"
import multer from "multer";
const router = Router();


const storage = multer.diskStorage({
    destination:"./server/images",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploder = multer({storage:storage})

router.route("/api").post(uploder.any(),fun.add);
router.route("/api").get(fun.get_data);

router.route("/get_file/:file").get(fun.get_file);

router.route("/get_movie/:id").get(fun.get_movie);

router.route("/user").post(fun.userdata);
router.route("/login").post(fun.login);
export default router;