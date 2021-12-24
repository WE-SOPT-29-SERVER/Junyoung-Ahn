const express = require("express");
const router = express.Router();
const util = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");

const users = require("../dbMockup/user");

router.post("/signup", (req, res) => {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    if (alreadyUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.ALREADY_EMAIL,
                ),
            );
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email,
    };

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.CREATED_USER, newUser),
    );
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );

    const user = users.filter(user => user.email === email)[0];

    if (!user) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    if (user.password !== password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.MISS_MATCH_PW,
                ),
            );
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, data),
    );
});

module.exports = router;
