import express from 'express';

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("These are the posts!");
});

export default router;
