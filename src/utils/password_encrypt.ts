import { compare, hash } from "bcryptjs";

const salt = 10;

export const encrypt = async (passwordPlane: string) => {
  const passwordHash = await hash(passwordPlane, salt);
  return passwordHash;
};

export const verified = async (passwordPlane: string, passwordHash: string) => {
  const isCorrect = await compare(passwordPlane, passwordHash);
  return isCorrect
};
