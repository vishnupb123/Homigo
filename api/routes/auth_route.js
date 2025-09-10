import express from 'express';

const router = express.Router();

router.get("/register", (req, res) => {
    res.send("Sign up or log in!");
});
router.get("/login", (req, res) => {
    res.send("Sign up or log in!");
});
router.get("/logout", (req, res) => {
    res.send("Sign up or log in!");
});

export default router;
