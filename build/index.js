"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multiMedia_1 = __importDefault(require("./routes/multiMedia"));
const cors = require('cors');
const app = (0, express_1.default)();
const path = require('path');
app.use(express_1.default.json());
app.use(cors());
app.use(express_1.default.static(path.join(__dirname, 'build')));
const PORT = 3000;
app.get('/', (_req, res) => {
    res.sendFile(path.resolve() + '/build/index.html');
});
app.use('/api/multiMedia', multiMedia_1.default);
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
