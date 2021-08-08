"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var route_1 = __importDefault(require("./routers/route"));
var app = express_1.default();
app.use(route_1.default);
app.listen(3000, function () {
    console.log('start');
});
