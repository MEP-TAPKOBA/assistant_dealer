import { PrismaClient, User } from "@prisma/client"; 
import { UserService } from "./services/UserService";
import { hash } from 'argon2'

const prisma = new PrismaClient()
const pidar = new UserService(prisma)

