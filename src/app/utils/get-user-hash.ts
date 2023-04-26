import { User } from '../domain';

export const getUserHash = (user: User): string => {
  return `${user.name.split('').reduce((a, b) => a + b.charCodeAt(0), 1)}`;
};
