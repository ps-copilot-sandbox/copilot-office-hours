import { getUserData } from '../services/userService.js';

export function logUser(userId) {
  const user = getUserData(userId);
  console.log("User Info:", user);
}
