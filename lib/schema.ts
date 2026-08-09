import { z } from "zod";

export const PAIN_POINTS = ["agenda", "dinero", "bienestar", "todo"] as const;
export type PainPoint = (typeof PAIN_POINTS)[number];

export const PAIN_LABELS: Record<PainPoint, string> = {
  agenda: "Agenda familiar",
  dinero: "Dinero y gastos",
  bienestar: "Cuidarme a mí",
  todo: "Todo junto",
};

export const waitlistSchema = z.object({
  name: z.string().trim().min(2, "Nombre demasiado corto").max(120),
  email: z.string().trim().email("Email no válido").max(200),
  pain_point: z.enum(PAIN_POINTS).optional(),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});
export type WaitlistInput = z.infer<typeof waitlistSchema>;
