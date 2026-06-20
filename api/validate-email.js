import { validateEmailDeliverability } from "../server/emailValidation.js";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ valid: false, message: "Method not allowed" });
  }

  const email = request.body?.email?.trim();
  if (!email || email.length > 254) {
    return response.status(400).json({ valid: false, reason: "invalid_format" });
  }

  try {
    const result = await validateEmailDeliverability(
      email,
      process.env.ABSTRACT_API_KEY
    );
    return response.status(200).json(result);
  } catch (error) {
    console.error("Email validation failed:", error);
    return response.status(503).json({
      valid: false,
      message: "Email verification is temporarily unavailable",
    });
  }
}
