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
const express_1 = __importDefault(require("express"));
const firebase_1 = require("../config/firebase");
const router = express_1.default.Router();
// Register new user
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        const userRecord = yield firebase_1.auth.createUser({
            email,
            password,
        });
        // Create custom token for the new user
        const token = yield firebase_1.auth.createCustomToken(userRecord.uid);
        res.status(201).json({
            message: "User created successfully",
            user: {
                uid: userRecord.uid,
                email: userRecord.email,
            },
            token,
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// Login user
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        // Get user by email
        const userRecord = yield firebase_1.auth.getUserByEmail(email);
        // Create custom token
        const token = yield firebase_1.auth.createCustomToken(userRecord.uid);
        res.json({
            message: "Login successful",
            user: {
                uid: userRecord.uid,
                email: userRecord.email,
            },
            token,
        });
    }
    catch (error) {
        res.status(401).json({ error: "Invalid credentials" });
    }
}));
// Get user profile
router.get("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (!((_a = req.user) === null || _a === void 0 ? void 0 : _a.uid)) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const userRecord = yield firebase_1.auth.getUser(req.user.uid);
        res.json({
            user: {
                uid: userRecord.uid,
                email: userRecord.email,
                displayName: userRecord.displayName,
                photoURL: userRecord.photoURL,
            },
        });
    }
    catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
}));
exports.default = router;
