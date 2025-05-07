import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import { authMiddleware } from "./middleware/auth";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Protected route example
app.get(
  "/api/protected",
  authMiddleware,
  (req: Request, res: Response): void => {
    res.json({ message: "This is a protected route" });
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
