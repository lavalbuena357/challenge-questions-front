import { petition } from "./petitions"
import { services } from "./services"

export const userUpdate = async (user, level, setUsers) => {
  const data = {
    ...user, 
    accum: user.accum + level.prize.points,
    level_reached: user.level_reached >= 5 ? user.level_reached : user.level_reached+1
  }
  await petition(services.updatedUser.url+`/${user.id}`, services.updatedUser.method, services.updatedUser.headers, data)
  setUsers(await petition(services.getUsers.url))
}