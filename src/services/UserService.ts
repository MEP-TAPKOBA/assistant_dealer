import { UserLoginDto } from "shared/dto/users/login-user.dto"
import { UserDto } from "shared/dto/users/user.dto"
import { PrismaClient} from "@prisma/client"
import { hash,verify } from "argon2"


export class UserService{

    constructor(private prisma:PrismaClient,){
    }
    async create(dto: UserDto):Promise<[number, string]>{
        const existedUser = await this.prisma.user.findFirst({where:{OR:[{email: dto.email},{phoneNumber:dto.phoneNumber}]}})
        if (existedUser) return [403,'Такой пользователь уже существует']
        dto.password = await hash(dto.password)
        try{
            const user = await this.prisma.user.create({data:dto})
            return [200, 'ok']
        } catch (e) {return [500, 'iternalError']}
    }
    async login(dto : UserLoginDto) {
        const authUser = await this.prisma.user.findUnique({where: {email:dto.email}})
        if (!authUser) return [403, 'Пользователь не найден']
        if(!await verify(authUser.password,dto.password)){
            return [400, 'Пароль не подошел']
        }
        //need continue
    }
}
