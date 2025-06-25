import { UserService } from "services/UserService";
import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

export class UserController {
    constructor(public userService: UserService) {
    }
    async get(req: Request, res: Response) {
        const [status, message] = await this.userService.getInfo(req)
        res.status(status).json({ message })
    }
    async switchPassword(req: Request, res: Response) {
        const [status, message] = await this.userService.switchPassword(req)
        res.status(status).json({ message })
    }
    async renderMenu(req: any, res: Response) {
        const prisma = new PrismaClient()
        const user = await prisma.user.findUnique({ where: { email: req.user.email } })
        res.render('menu', { lastName: user.lastName, firstName: user.firstName })
    }
}
