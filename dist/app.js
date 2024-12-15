"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/modules/middleWare/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/modules/middleWare/notFound"));
const route_1 = __importDefault(require("./app/routes/route"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: ['http://localhost:5173',],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use('/api', route_1.default);
console.log(process.cwd());
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
