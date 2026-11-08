import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function verifyPassword(password: string, hash: string) {
  const isValid = await bcrypt.compare(password, hash);
  return isValid;
}

(async () => {
  //BD
  const hashedPassword = await hashPassword("123456");
  console.log({ hashedPassword });
})();
