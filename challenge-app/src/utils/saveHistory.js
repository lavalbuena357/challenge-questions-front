import { petition } from "./petitions";
import { services } from "./services";

export const saveHistory = async (userId) => {
  const date = new Date().toISOString();
  const data = {
    date: date,
    userId: userId
  }
  await petition(services.addHistory.url, services.addHistory.method, services.addHistory.headers, data)
}