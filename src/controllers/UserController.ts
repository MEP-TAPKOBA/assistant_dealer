import {Request, Response} from 'express'
import { UserService } from "services/UserService";
import { UserLoginDto } from "shared/dto/users/login-user.dto";


export class UserController {
    constructor(public userService : UserService){
    }
    async get(req: Request, res: Response ){
        const [status, message] = await this.userService.get(req)
        res.status(status).json({message}) 
        }
    }
