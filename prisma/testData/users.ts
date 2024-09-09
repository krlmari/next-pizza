import { UserRole } from "@prisma/client";

export const USERS = [
  {
    fullName: "Admin",
    verified: new Date(),
    role: UserRole.ADMIN,
    email: "admin@email.com",
    password: "4321",
  },
  {
    fullName: "User",
    verified: new Date(),
    role: UserRole.USER,
    email: "user@email.com",
    password: "1234",
  },
];
