import { petition } from "./petitions"
import { services } from "./services"

export const userUpdate = async (win, user, level, setUsers) => {
  const data = {
    ...user, 
    name: `Jugador ${user.id}`,
    accum: win ? user.accum + level.prize.points : '0',
    level_reached: user.level_reached >= 5 ? user.level_reached : win ? user.level_reached+1 : user.level_reached
  }
  await petition(services.updatedUser.url+`/${user.id}`, services.updatedUser.method, services.updatedUser.headers, data)
  setUsers(await petition(services.getUsers.url))
}