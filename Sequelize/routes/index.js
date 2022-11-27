const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        // 사용자 조회
        const users = await User.findAll();
        res.render('sequelize', { users });
    } 
    catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;