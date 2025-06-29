import { UserService } from "services/UserService";
import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";
import { renderResult } from "../extensions/renderResult";

export class UserController {
    constructor(public userService: UserService) {
    }
    async get(req: Request, res: Response) {
        const [status, message] = await this.userService.getInfo(req)
        renderResult(res, status, message)
    }
    async switchPassword(req: Request, res: Response) {
        const [status, message] = await this.userService.switchPassword(req)
        renderResult(res, status, message)
    }
    async renderMenu(req: any, res: Response) {
        const prisma = new PrismaClient()
        const user = await prisma.user.findUnique({ where: { email: req.user.email } })
        res.render('menu', { lastName: user.lastName, firstName: user.firstName })
    }
}
