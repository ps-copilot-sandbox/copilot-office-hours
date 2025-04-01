import { getUserData } from './userService.js';

export function authenticate(token) {
  const user = getUserData("123");
  return user && token === "valid";
}
