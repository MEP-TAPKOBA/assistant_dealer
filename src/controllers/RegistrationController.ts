import { UserDto } from "shared/dto/users/user.dto";
import { UserService } from "services/UserService";
import { Request, Response } from 'express'
import { renderResult } from "../extensions/renderResult";

export class RegistrationController {
    constructor(public userService: UserService) {
    }
    async render(req: Request, res: Response) {
        res.render('registration')
    }
    async signUp(req: Request, res: Response) {
        const dto: UserDto = req.body
        const [status, message] = await this.userService.create(dto)
        renderResult(res, status, message)
    }

}