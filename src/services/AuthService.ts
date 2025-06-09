import { UserLoginDto } from "shared/dto/users/login-user.dto"
import { PrismaClient} from "@prisma/client"
import { Response} from 'express'
import { verify } from "argon2"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export class AuthService{

    constructor(private prisma:PrismaClient,){
    }   
    async login(dto : UserLoginDto, res: Response): Promise<[number,string]> {
        const authUser = await this.prisma.user.findUnique({where: {email:dto.email}})
        if (!authUser) return [403, 'Пользователь не найден']
        if(!await verify(authUser.password, dto.password)){
            return [400, 'Пароль не подошел']
        }
        const payload = {
            id: authUser.id,
            email: authUser.email,
            iat: Math.floor(Date.now() / 1000)
          };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '24h',
            algorithm: 'HS256'
        });
        res.cookie('token', token, {
            httpOnly: true,    // защищает от доступа через JS на клиенте
            secure: true,      // только по HTTPS
            sameSite: 'strict',
            maxAge: 21600000    // 6 часов
                });
        return [200, 'Авторизация прошла успешно']
        }
}
        
    

