import { RegisterShopDto } from "../shared/dto/shop/register-shop.dto";
import { shopValidator } from "../shared/validators/shop.validator";

export function createShopMiddleware(req, res, next) {
    const dto: RegisterShopDto = req.body
    const errors = shopValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.status(400).json({ message: err })
        return
    }
    next()
}
