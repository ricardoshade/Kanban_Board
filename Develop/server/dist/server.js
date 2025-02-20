"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forceDatabaseRefresh = false;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const models_1 = require("./models");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Serves static files in the entire client's dist folder
app.use(express_1.default.static('../client/dist'));
app.use(express_1.default.json());
app.use(index_js_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, models_1.connectDB)();
    yield (0, models_1.syncDB)(forceDatabaseRefresh);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
startServer();
