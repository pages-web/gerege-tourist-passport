import { z } from "zod";

export const phoneZod = z
  .string()
  .regex(/^\d{8}$/, "Invalid Phone number")
  .min(1, { message: "Phone is required" });

export const passwordZod = z
  .string()
  .min(1, { message: "Please enter your password." })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "The password must be at least 8 characters long and include at least one lowercase letter and one uppercase letter."
  );
export const mailZod = z
  .string()
  .min(1, { message: "Please enter your email." })
  .regex(
    /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/,
    "Invalid email"
  );
