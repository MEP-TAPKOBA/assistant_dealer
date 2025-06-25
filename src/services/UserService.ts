import { UserDto } from "shared/dto/users/user.dto"
import { PrismaClient } from "@prisma/client"
import { hash, verify } from "argon2"
import jwt from 'jsonwebtoken'

export class UserService {

    constructor(private prisma: PrismaClient,) {
    }
    async create(dto: UserDto): Promise<[number, string]> {
        const existedUser = await this.prisma.user.findFirst({ where: { OR: [{ email: dto.email }, { phoneNumber: dto.phoneNumber }] } })
        if (existedUser) return [403, 'Такой пользователь уже существует']
        dto.password = await hash(dto.password)
        try {
            const user = await this.prisma.user.create({ data: dto })
            return [200, 'ok']
        } catch (e) { return [500, 'iternalError'] }
    }
    async switchPassword(req): Promise<[number, string]> {
        const { oldPassword, newPassword } = req.body
        const token = req.cookies?.token
        const decoded = jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] }) as any
        const findUser = await this.prisma.user.findUnique({ where: { email: decoded.email } })
        if (!await verify(findUser.password, oldPassword))
            return [401, 'Пароль не подошел']
        await this.prisma.user.update({ where: { email: decoded.email }, data: { password: await hash(newPassword) } })
        return [200, `success \n newPassword:${newPassword}`]
    }
    async getInfo(dto): Promise<[number, object]> {
        const user = await this.prisma.user.findUnique({ where: { email: dto.user.email } })
        return [200, user]
    }
}
