"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/", function (req, res, next) {
    res.send("기본 구조 작업만 5번쨰 ^^;;;");
});
module.exports = router;
