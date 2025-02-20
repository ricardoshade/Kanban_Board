"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth-routes"));
const api_1 = __importDefault(require("./api"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
// TODO: Add authentication to the API routes
router.use('/api', auth_1.authenticateToken, api_1.default);
exports.default = router;
