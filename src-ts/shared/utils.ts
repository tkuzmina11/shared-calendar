export function getJWTSecret(): string {
  if (process.env.JWT_SECRET === undefined) {
    throw new Error("JWT_SECRET is not provided");
  }
  return process.env.JWT_SECRET;
}

export function getSendgridApiKey(): string {
  if (process.env.SENDGRID_API_KEY === undefined) {
    throw new Error("SENDGRID_API_KEY is not provided");
  }
  return process.env.SENDGRID_API_KEY;
}

export function getSendgridFromAddress(): string {
  if (process.env.SENDGRID_FROM_ADDRESS === undefined) {
    throw new Error("SENDGRID_FROM_ADDRESS is not provided");
  }
  return process.env.SENDGRID_FROM_ADDRESS;
}

export function getSendgridAuthEmailTemplate(): string {
  if (process.env.SENDGRID_AUTH_EMAIL_TEMPLATE === undefined) {
    throw new Error("SENDGRID_AUTH_EMAIL_TEMPLATE is not provided");
  }
  return process.env.SENDGRID_AUTH_EMAIL_TEMPLATE;
}

export function getRemoveAllToken(): string {
  return process.env.REMOVE_ALL_TOKEN ?? "";
}

export function getJWTCookieName(): string {
  return process.env.JWT_COOKIE ?? "auth";
}

export function getConfirmedEmailsCookieName(): string {
  return process.env.EMAILS_COOKIE ?? "emails";
}

const RND_LIMIT = 2 ** 32;
export function getId(): string {
  const datePart = Date.now().toString(16);
  const rnd = Math.floor(Math.random() * RND_LIMIT);
  const rndPart = rnd.toString(16).padStart(8, "0");
  return datePart + rndPart;
}

export function emailMatch(email: string, list: string[]): boolean {
  email = email.toLowerCase();
  const lastAt = email.lastIndexOf("@");
  const domainName = email.substring(lastAt); // including @
  return list.includes(email) || list.includes(domainName);
}

export function getTTL(date: Date): number {
  return Math.trunc(date.getTime() / 1000);
}

export function sanitizeReturnUrl(url: string | undefined | null): string {
  if (url == null) {
    return "/";
  }
  if (!url.startsWith("/")) {
    return "/";
  }
  return url;
}

export function getCookieValue(
  cookies: string[],
  cookieName: string
): string | null {
  const prefix = `${cookieName}=`;
  const cookie = cookies.find((c) => c.startsWith(prefix));
  return cookie?.replace(prefix, "") ?? null;
}
