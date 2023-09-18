export async function CheckCookieAuth(req) {
  const reqHeaders = new Headers(req.headers);
  const token = reqHeaders.get("token");
}
