import { UserDto } from "shared/dto/users/user.dto"
import { PrismaClient } from "@prisma/client"
import { hash } from "argon2"

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
    async get(dto): Promise<[number, object]> {
        const user = await this.prisma.user.findUnique({ where: { email: dto.user.email } })
        console.table(user)
        return [200, user]
    }
}
