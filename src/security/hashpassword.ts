import * as bcrypt from 'bcrypt';

async function hashPassword(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function comparePasswords(
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}
export { hashPassword, comparePasswords };
