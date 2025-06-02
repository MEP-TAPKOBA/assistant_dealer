import { UserDto } from "../shared/dto/users/user.dto";
import { userValidator } from "../shared/validators/user.validator";

export function registerMiddleware (req, res, next){
    const dto : UserDto = req.body
    console.log(dto)
    console.log(dto.companyName)
    const errors = userValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.status(400).json({message: err})
        return
    }
    next()
}