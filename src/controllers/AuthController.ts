import {Request, Response} from 'express'
import { AuthService } from "services/AuthService";
import { UserLoginDto } from "shared/dto/users/login-user.dto";


export class AuthController {
    constructor(public authService : AuthService){
    }
    async login(req: Request, res: Response ){
        const dto : UserLoginDto = req.body
        const result = await this.authService.login(dto) 
        if (result.length == 2) {
            res.status(result[0]).json({message:result[1]})
            
        }
        if (result.length > 2){
            
            res.cookie('token', result[2], {
                httpOnly: true,    // защищает от доступа через JS на клиенте
                secure: true,      // только по HTTPS
                sameSite: 'strict',
                maxAge: 21600000    // 6 часов
            });
            res.status(result[0]).json({user: result[1],})
        }
    }
}