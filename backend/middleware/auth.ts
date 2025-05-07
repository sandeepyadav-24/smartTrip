import { Request, Response, NextFunction } from "express";
import { auth } from "../config/firebase";

declare global {
  namespace Express {
    interface Request {
      user?: {
        uid: string;
      };
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      res.status(401).json({ error: "No token provided" });
      return;
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await auth.verifyIdToken(token);

    req.user = {
      uid: decodedToken.uid,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
};
