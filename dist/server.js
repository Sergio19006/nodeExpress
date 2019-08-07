"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moviesRouter_1 = require("./routes/moviesRouter");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/movies', moviesRouter_1.router);
const PORT = 8081;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=server.js.map