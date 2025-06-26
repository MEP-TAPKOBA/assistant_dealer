import { userValidator } from "../shared/validators/user.validator";
import { UserDto } from "../shared/dto/users/user.dto";
import { Response } from 'express' 

export function registerMiddleware(req, res: Response, next) {
    const dto: UserDto = req.body
    const errors = userValidator(dto)
    if (errors) {
        const err = errors.join('<br>')
        res.render('errors',{errors: err})
        return
    }
    next()
}