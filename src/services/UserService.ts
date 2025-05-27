import { PrismaClient, User } from "@prisma/client"
import { hash } from "argon2"

export class UserService{

    constructor(private prisma:PrismaClient,){
    }

    async create(dto: User){
        const existedUser = await this.prisma.user.findFirst({where:{OR:[{email: dto.email},{phoneNumber:dto.phoneNumber}]}})
        if (existedUser) return false
        dto.password = await hash(dto.password)
        try{
            const user = await this.prisma.user.create({data:dto})
            return user
        } catch (e) {console.log(e)}
    }
}
