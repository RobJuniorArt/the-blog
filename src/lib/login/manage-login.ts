import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString("base64");
  return base64;
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, "base64").toString("utf-8");
  return bcrypt.compare(password, hash);
}

(async () => {
  //BD

  const isPasswordIsValid = await verifyPassword(
    "123456",
    "JDJiJDEwJFlLZkpleS44UzdzYmswdFAwWEYvdk9wTi5iQkt2WUI0Qi9aSFVvZk9qMVlHUVpNTVlSZk5x",
  );
  console.log({ isPasswordIsValid });
})();
