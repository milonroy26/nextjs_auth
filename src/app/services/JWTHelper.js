import { SignJWT, jwtVerify } from "jose";

export async function createToken(email) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXP)
    .sign(secret);

  return token;
}

// verify Token

export async function verifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const verified = await new jwtVerify(token, secret);
  return decoded["payload"];
}
