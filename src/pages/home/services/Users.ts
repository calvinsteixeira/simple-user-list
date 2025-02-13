import { api } from "@/server/api";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getUsers() {
  try {
    await delay(4000);

    const result = await api.get("/Users");
    return result.data;
  } catch (err: any) {
    throw new Error("Erro ao buscar usuários");
  }
}
