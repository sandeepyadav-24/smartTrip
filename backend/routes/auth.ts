import express, { Request, Response } from "express";
import { auth } from "../config/firebase";

const router = express.Router();

// Register new user
router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const userRecord = await auth.createUser({
      email,
      password,
    });

    // Create custom token for the new user
    const token = await auth.createCustomToken(userRecord.uid);

    res.status(201).json({
      message: "User created successfully",
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
      },
      token,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Login user
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    // Get user by email
    const userRecord = await auth.getUserByEmail(email);

    // Create custom token
    const token = await auth.createCustomToken(userRecord.uid);

    res.json({
      message: "Login successful",
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
      },
      token,
    });
  } catch (error: any) {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Get user profile
router.get("/profile", async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user?.uid) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const userRecord = await auth.getUser(req.user.uid);

    res.json({
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        photoURL: userRecord.photoURL,
      },
    });
  } catch (error: any) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

export default router;
