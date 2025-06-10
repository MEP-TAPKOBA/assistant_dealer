import { UserLoginDto } from "shared/dto/users/login-user.dto";
import { AuthService } from "services/AuthService";
import { Request, Response } from 'express'


export class AuthController {
    constructor(public authService: AuthService) {
    }
    async render(req: Request, res: Response) {
        res.render('login')
    }
    async login(req: Request, res: Response) {
        const dto: UserLoginDto = req.body
        const [status, message] = await this.authService.login(dto, res)
        res.status(status).json({ message })
    }

}