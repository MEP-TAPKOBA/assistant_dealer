import { userValidator } from "../shared/validators/user.validator";
import { UserDto } from "../shared/dto/users/user.dto";

export function registerMiddleware(req, res, next) {
    const dto: UserDto = req.body
    const errors = userValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.status(400).json({ message: err })
        return
    }
    next()
}