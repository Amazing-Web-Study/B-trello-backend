"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexrouter = require('../src/routers/indexRouter');
var connect = require('./db/db');
var cors = require('cors');
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.set('port', process.env.SERVER_PORT);
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/', indexrouter);
app.use(cors());
connect();
app.listen(app.get('port'), function () {
    console.log("server port is " + app.get('port'));
});
